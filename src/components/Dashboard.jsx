import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/Picture1.png";
import userAvatar from "../assets/avatar-male.jpg";
import { FaBell, FaCommentDots, FaBars } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getChartData as getActiveLoansData } from "../utils/activeLoansData";
import { getChartData as getActualsData } from "../utils/actualData";
import { getChartData as getDepositsData } from "../utils/depositData";
import { getChartData as getDelinquencyData } from "../utils/delinquencyData";
import { useLoanContext } from "../context/LoanContext";
import { useActualContext } from "../context/ActualContext";
import { useDepositContext } from "../context/DepositContext";
import { useDelinquencyContext } from "../context/DelinquencyContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ---------- navigation ---------- */
  const go = (p) => () => navigate(p);
  const nav = {
    accounts: go("/AccountSection.jsx"),
    activeLoans: go("/ActiveLoansSection.jsx"),
    delinquency: go("/DelinquencySection.jsx"),
    writeOff: go("/WriteOffSection.jsx"),
    deposit: go("/DepositSection.jsx"),
    actuals: go("/ActualSection.jsx"),
    admin: go("/AdminManagement.jsx"),
    audit: go("/AuditTrail.jsx"),
    ctr: go("/CtrComplianceSection.jsx"),
  };

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/");
  };

  const [user] = useState({
    email: "uche@accionmfb.com",
    name: "User Name",
  });

  const [stats] = useState({
    activeLoans: "₦4,000,000,000",
    delinquency: "₦250,000,000",
    wof: "₦300,000",
    deposit: "₦1,000,000",
  });

  /* ---------- context (safe defaults) ---------- */
  const { loans = [] } = useLoanContext() ?? {};
  const { actuals = [] } = useActualContext() ?? {};
  const { deposits = [] } = useDepositContext() ?? {};
  const { delinquencies = [] } = useDelinquencyContext() ?? {};

  const emptyChart = { labels: [], datasets: [] };
  const [graphData, setGraphData] = useState({
    activeLoans: emptyChart,
    actuals: emptyChart,
    deposits: emptyChart,
    delinquency: emptyChart,
  });

  /* ---------- build chart data ---------- */
  useEffect(() => {
    const safe = (fn, arr) =>
      Array.isArray(arr) ? fn(arr) ?? emptyChart : emptyChart;

    setGraphData({
      activeLoans: safe(getActiveLoansData, loans),
      actuals: safe(getActualsData, actuals),
      deposits: safe(getDepositsData, deposits),
      delinquency: safe(getDelinquencyData, delinquencies),
    });
  }, [loans, actuals, deposits, delinquencies]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 14, weight: "600" },
          color: "#1e293b",
          padding: 20,
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
      tooltip: {
        backgroundColor: "rgba(30, 10, 70, 0.9)",
        titleColor: "#e0e7ff",
        bodyColor: "#c7d2fe",
        borderColor: "#7c3aed",
        borderWidth: 2,
        cornerRadius: 12,
        displayColors: true,
        callbacks: {
          label: (context) => {
            return ` ₦${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(124, 58, 237, 0.1)" },
        ticks: {
          callback: (value) => "₦" + value.toLocaleString(),
          color: "#64748b",
        },
        title: {
          display: true,
          text: "Amount (₦)",
          color: "#4c1d95",
          font: { size: 14, weight: "bold" },
        },
      },
      x: {
        grid: { display: false },
        ticks: { color: "#64748b" },
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutQuart",
    },
  };

  /* ---------- guarded chart renderer ---------- */
  const Chart = ({ data, title }) =>
    data?.labels?.length > 0 ? (
      <div className="chart-wrapper">
        <h3 className="chart-title">{title}</h3>
        <Bar data={data} options={chartOptions} />
      </div>
    ) : (
      <div className="chart-placeholder">
        <p>No data available for {title}</p>
      </div>
    );

  return (
    <div className="dashboard-container">
      {/* The mobile menu button */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? "open" : ""}`}>
        <img src={logo2} alt="loan accounts logo" className="sidebar-logo" />
        <ul className="sidebar-menu">
          {[
            { label: "Accounts Section", action: nav.accounts },
            { label: "Active Loans Section", action: nav.activeLoans },
            { label: "Delinquency Section", action: nav.delinquency },
            { label: "WOF Section", action: nav.writeOff },
            { label: "Deposit Section", action: nav.deposit },
            { label: "Actual Section", action: nav.actuals },
            { label: "CTR Compliance Section", action: nav.ctr },
            { label: "Admin Management", action: nav.admin },
            { label: "Audit Trail", action: nav.audit },
          ].map((item, i) => (
            <li
              key={i}
              onClick={() => {
                item.action();
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <div className="nav-left">
            <img src={logo2} alt="loan accounts logo" className="nav-logo" />
            <input
              type="text"
              placeholder="Search reports..."
              className="search-bar"
            />
          </div>
          <div className="nav-right">
            <span className="user-name">{user.name}</span>
            <div className="nav-icons">
              <div className="icon bell">
                <FaBell size={20} />
                <span className="badge">3</span>
              </div>
              <div className="icon chat">
                <FaCommentDots size={20} />
              </div>
            </div>
            <img src={userAvatar} alt="Avatar" className="user-avatar" />
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card purple">
            <h4>Active Loans</h4>
            <p>{stats.activeLoans}</p>
          </div>
          <div className="stat-card violet">
            <h4>Delinquency</h4>
            <p>{stats.delinquency}</p>
          </div>
          <div className="stat-card indigo">
            <h4>Write-Off (WOF)</h4>
            <p>{stats.wof}</p>
          </div>
          <div className="stat-card purple-dark">
            <h4>Total Deposits</h4>
            <p>{stats.deposit}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="charts-grid">
          <div className="chart-card">
            <Chart data={graphData.activeLoans} title="Active Loans Trend" />
          </div>
          <div className="chart-card">
            <Chart data={graphData.actuals} title="Actuals Performance" />
          </div>
          <div className="chart-card">
            <Chart data={graphData.deposits} title="Deposit Growth" />
          </div>
          <div className="chart-card">
            <Chart data={graphData.delinquency} title="Delinquency Rate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
