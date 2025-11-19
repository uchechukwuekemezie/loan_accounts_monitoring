import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/accion-logo-svg-orange.svg";
import userAvatar from "../assets/avatar-male.jpg";
import { FaBell, FaCommentDots } from "react-icons/fa";
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
    name: "Uchechukwu Ekemezie",
  });

  const [stats] = useState({
    activeLoans: "₦4,000,000,000",
    deliquency: "₦250,000,000",
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
    plugins: { legend: { position: "top" }, title: { display: false } },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: "Amount (₦)" } },
    },
  };

  /* ---------- guarded chart renderer ---------- */
  const Chart = ({ data, id }) =>
    data?.labels?.length > 0 ? (
      <Bar id={id} data={data} options={chartOptions} height={200} />
    ) : (
      <div className="chart-placeholder">No data yet</div>
    );

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src={logo2} alt="Accion Logo" className="sidebar-logo" />
        <ul className="sidebar-menu">
          <li onClick={nav.accounts} style={{ cursor: "pointer" }}>
            Accounts Section
          </li>
          <li onClick={nav.activeLoans} style={{ cursor: "pointer" }}>
            Active Loans Section
          </li>
          <li onClick={nav.delinquency} style={{ cursor: "pointer" }}>
            Delinquency Section
          </li>
          <li onClick={nav.writeOff} style={{ cursor: "pointer" }}>
            WOF Section
          </li>
          <li onClick={nav.deposit} style={{ cursor: "pointer" }}>
            Deposit Section
          </li>
          <li onClick={nav.actuals} style={{ cursor: "pointer" }}>
            Actual Section
          </li>
          <li onClick={nav.ctr} style={{ cursor: "pointer" }}>
            CTR Compliance Section
          </li>
          <li onClick={nav.admin} style={{ cursor: "pointer" }}>
            Admin Management
          </li>
          <li onClick={nav.audit} style={{ cursor: "pointer" }}>
            Audit Trail
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <div className="nav-left">
            <img src={logo2} alt="Finance Logo" className="nav-logo" />
            <input
              type="text"
              placeholder="Search here..."
              className="search-bar"
            />
          </div>
          <div className="nav-right">
            <span className="user-email">{user.email}</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
            <div className="nav-icons">
              <span className="icon bell">
                {" "}
                <FaBell size={20} />
                <span className="badge">3</span>
              </span>
              <span className="icon chat">
                <FaCommentDots size={20} />
              </span>
            </div>
            <img src={userAvatar} alt="User Avatar" className="user-avatar" />
          </div>
        </div>

        {/* Stats */}
        <div className="stats-section">
          <div className="stat-card">
            Active Loans
            <br />
            {stats.activeLoans}
          </div>
          <div className="stat-card">
            Delinquency
            <br />
            {stats.deliquency}
          </div>
          <div className="stat-card">
            WOF
            <br />
            {stats.wof}
          </div>
          <div className="stat-card">
            Deposit
            <br />
            {stats.deposit}
          </div>
        </div>

        {/* Charts */}
        <div className="graphs-section">
          <div className="graph-card">
            <Chart data={graphData.activeLoans} id="activeLoansGraph" />
          </div>
          <div className="graph-card">
            <Chart data={graphData.actuals} id="actualsGraph" />
          </div>
          <div className="graph-card">
            <Chart data={graphData.deposits} id="depositGraph" />
          </div>
          <div className="graph-card">
            <Chart data={graphData.delinquency} id="delinquencyGraph" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
