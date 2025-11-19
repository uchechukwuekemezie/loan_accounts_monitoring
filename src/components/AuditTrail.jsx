import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "../styles/AuditTrail.css";
import { FaSearch, FaFile, FaCalendarAlt } from "react-icons/fa";
import logo1 from "../assets/accion-logo-svg-orange.svg";

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

  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredAuditData = auditData.filter(
    (data) =>
      data.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div className="audit-trail-section-container">
      <div className="sidebar">
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

      <div className="audit-trail-section-white-div">
        <div className="audit-trail-section-content">
          <div className="audit-trail-report-header">
            <div className="audit-trail-report-title">
              <h2>Audit Trail Report</h2>
              <p>Showing data over the last 30 days</p>
            </div>
            <div className="audit-trail-time-buttons">
              <button>Day</button>
              <button>Week</button>
              <button>Month</button>
              <button>Year</button>
              <button>All Time</button>
              <button>
                <FaCalendarAlt /> Custom Date
              </button>
            </div>
            <div className="audit-trail-export-button">
              <button onClick={handleExportClick}>
                <FaFile /> Export Data
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
          <div className="audit-trail-table-controls">
            <div className="audit-trail-search-bar">
              <input
                type="text"
                placeholder="Search user, event, or details"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="search-icon" />
            </div>
            <div className="audit-trail-filter-spacer" />
          </div>
          <div className="audit-trail-table-section">
            <table className="audit-trail-table">
              <thead>
                <tr>
                  <th>@timestamp</th>
                  <th>User</th>
                  <th>Event</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredAuditData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.timestamp}</td>
                    <td>{data.user}</td>
                    <td>{data.event}</td>
                    <td>{data.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditTrail;
