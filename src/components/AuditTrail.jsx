import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "../styles/AuditTrail.css";
import {
  FaSearch,
  FaFileExport,
  FaBars,
  FaTimes,
  FaUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaEdit,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";
import logo1 from "../assets/Picture1.png";

const AuditTrail = () => {
  const navigate = useNavigate();

  // navigation to the dashboard page
  const handleDashboardClick = () => {
    navigate("/Dashboard.jsx");
  };

  // the navigation to the accounts section page
  const handleAccountsClick = () => {
    navigate("/AccountSection.jsx");
  };

  // navigation to the active loans page
  const handleActiveLoansClick = () => {
    navigate("/ActiveLoansSection.jsx");
  };

  // navigation to the delinquency loans page
  const handleDelinquencyClick = () => {
    navigate("/DelinquencySection.jsx");
  };

  // navigation to the write-off page
  const handleWriteOffClick = () => {
    navigate("/WriteOffSection.jsx");
  };

  // navigation to the deposit page
  const handleDepositClick = () => {
    navigate("/DepositSection.jsx");
  };

  // navigation to the actuals page
  const handleActualsClick = () => {
    navigate("/ActualSection.jsx");
  };

  // navigation to the admin management page
  const handleAdminManagementClick = () => {
    navigate("/AdminManagement.jsx");
  };

  // navigation to the audit trail page
  const handleAuditTrailClick = () => {
    navigate("/AuditTrail.jsx");
  };

  // navigation to the CTR Compliance Section Page
  const handleCtrComplianceClick = () => {
    navigate("/CtrComplianceSection.jsx");
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [timeFilter, setTimeFilter] = useState("Last 30 Days");
  const [exportDropdown, setExportDropdown] = useState(false);

  const [auditData, setAuditData] = useState([
    {
      timestamp: "2025-10-13 09:15:00",
      user: "Alice Smith",
      event: "Login",
      details: "User logged in from IP 192.168.1.10",
    },
    {
      timestamp: "2025-10-13 10:30:00",
      user: "Tunde Adewale",
      event: "Loan Approval",
      details: "Approved loan CON002 for ₦1,500,000",
    },
    {
      timestamp: "2025-10-13 14:05:00",
      user: "Chiamaka Okoro",
      event: "Data Update",
      details: "Updated customer details for CIF003",
    },
    {
      timestamp: "2025-10-14 08:45:00",
      user: "Usman Ibrahim",
      event: "Logout",
      details: "User logged out from IP 10.0.0.5",
    },
    {
      timestamp: "2025-10-14 11:00:00",
      user: "Fatima Musa",
      event: "Report Export",
      details: "Exported Delinquency Report as Excel",
    },
  ]);

  const filteredAuditData = auditData.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.user.toLowerCase().includes(term) ||
      item.event.toLowerCase().includes(term) ||
      item.details.toLowerCase().includes(term)
    );
  });

  const getEventIcon = (type) => {
    switch (type) {
      case "login":
        return <FaSignInAlt />;
      case "logout":
        return <FaSignOutAlt />;
      case "approval":
        return <FaCheckCircle />;
      case "update":
        return <FaEdit />;
      case "export":
        return <FaDownload />;
      case "admin":
        return <FaUser />;
      default:
        return <FaCheckCircle />;
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case "login":
        return "#10b981";
      case "logout":
        return "#f59e0b";
      case "approval":
        return "#3b82f6";
      case "update":
        return "#8b5cf6";
      case "export":
        return "#06b6d4";
      case "admin":
        return "#ec4899";
      default:
        return "#7c3aed";
    }
  };

  const handleExportClick = () => setExportDropdown(!exportDropdown);
  const handleExportOption = (format) => {
    const worksheet = XLSX.utils.json_to_sheet(filteredAuditData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "AuditTrail");
    const buf = XLSX.write(workbook, {
      bookType: format === "Excel" ? "xlsx" : format.toLowerCase(),
      type: "buffer",
    });
    const blob = new Blob([buf], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `AuditTrail_${format.toLowerCase()}.${
      format.toLowerCase() === "excel" ? "xlsx" : format.toLowerCase()
    }`; // Fixed to .xlsx for Excel
    link.click();
    window.URL.revokeObjectURL(url);
    setExportDropdown(false);
  };

  return (
    <div className="audit-container">
      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {/* The sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? "open" : ""}`}>
        <img
          src={logo1}
          alt="Accion Logo"
          className="sidebar-logo"
          onClick={handleDashboardClick}
          style={{ cursor: "pointer" }}
        />
        <ul className="sidebar-menu">
          <li onClick={handleAccountsClick} style={{ cursor: "pointer" }}>
            Accounts Section
          </li>
          <li onClick={handleActiveLoansClick} style={{ cursor: "pointer" }}>
            Active Loans Section
          </li>
          <li onClick={handleDelinquencyClick} style={{ cursor: "pointer" }}>
            Delinquency Section
          </li>
          <li onClick={handleWriteOffClick} style={{ cursor: "pointer" }}>
            WOF Section
          </li>
          <li onClick={handleDepositClick} style={{ cursor: "pointer" }}>
            Deposit Section
          </li>
          <li onClick={handleActualsClick} style={{ cursor: "pointer" }}>
            Actual Section
          </li>
          <li onClick={handleCtrComplianceClick} style={{ cursor: "pointer" }}>
            CTR Compliance Section
          </li>
          <li
            onClick={handleAdminManagementClick}
            style={{ cursor: "pointer" }}
          >
            Admin Management
          </li>
          <li onClick={handleAuditTrailClick} style={{ cursor: "pointer" }}>
            Audit Trail
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="page-header">
          <h1>Audit Trail</h1>
          <p>
            Complete system activity log for security and compliance monitoring
          </p>
        </div>

        <div className="controls-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by user, event, or details..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="time-filters">
            {[
              "Today",
              "Last 7 Days",
              "Last 30 Days",
              "Last 90 Days",
              "All Time",
            ].map((period) => (
              <button
                key={period}
                className={timeFilter === period ? "active" : ""}
                onClick={() => setTimeFilter(period)}
              >
                {period}
              </button>
            ))}
          </div>
          <div className="export-wrapper">
            <button className="export-btn" onClick={handleExportClick}>
              <FaFileExport /> Export
            </button>
            {exportDropdown && (
              <div className="export-dropdown">
                <div onClick={() => handleExportOption("Excel")}>
                  Export as Excel
                </div>
                <div onClick={() => handleExportOption("CSV")}>
                  Export as CSV
                </div>
                <div onClick={() => handleExportOption("PDF")}>
                  Export as PDF
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="audit-timeline">
          {filteredAuditData.map((log, i) => (
            <div key={i} className="audit-entry">
              <div
                className="timeline-dot"
                style={{ backgroundColor: getEventColor(log.type) }}
              >
                <div className="icon">{getEventIcon(log.type)}</div>
              </div>
              <div className="audit-card">
                <div className="audit-header">
                  <h4>{log.event}</h4>
                  <span className="timestamp">{log.timestamp}</span>
                </div>
                <p className="user">
                  <strong>{log.user}</strong>
                </p>
                <p className="details">{log.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuditTrail;
