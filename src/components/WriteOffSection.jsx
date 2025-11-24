import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "../styles/WriteOffSection.css";
import logo1 from "../assets/Picture1.png";
import { FaSearch, FaFileExport, FaBars, FaTimes } from "react-icons/fa";

const WriteOffSection = () => {
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
  const [amountFilter, setAmountFilter] = useState("All Amounts");
  const [exportDropdown, setExportDropdown] = useState(false);

  const [writeOffs, setWriteOffs] = useState([
    {
      contractNo: "CON001",
      accountNo: "ACC001",
      wofDate: "2025-08-01",
      customerId: "CID001",
      surname: "Doe",
      otherNames: "John",
      totalWofAmount: "₦600,000",
      wofPrincipal: "₦500,000",
      wofInterest: "₦80,000",
      wofCharges: "₦20,000",
      outstandingAmount: "₦600,000",
      paidAmount: "₦0",
      branch: "Main Branch",
    },
    {
      contractNo: "CON002",
      accountNo: "ACC002",
      wofDate: "2025-07-28",
      customerId: "CID002",
      surname: "Adewale",
      otherNames: "Tunde",
      totalWofAmount: "₦1,800,000",
      wofPrincipal: "₦1,500,000",
      wofInterest: "₦250,000",
      wofCharges: "₦50,000",
      outstandingAmount: "₦1,800,000",
      paidAmount: "₦0",
      branch: "Ikeja Branch",
    },
    {
      contractNo: "CON003",
      accountNo: "ACC003",
      wofDate: "2025-08-15",
      customerId: "CID003",
      surname: "Okoro",
      otherNames: "Chiamaka",
      totalWofAmount: "₦300,000",
      wofPrincipal: "₦250,000",
      wofInterest: "₦40,000",
      wofCharges: "₦10,000",
      outstandingAmount: "₦300,000",
      paidAmount: "₦0",
      branch: "Surulere Branch",
    },
    {
      contractNo: "CON004",
      accountNo: "ACC004",
      wofDate: "2025-08-20",
      customerId: "CID004",
      surname: "Ibrahim",
      otherNames: "Usman",
      totalWofAmount: "₦6,000,000",
      wofPrincipal: "₦5,000,000",
      wofInterest: "₦800,000",
      wofCharges: "₦200,000",
      outstandingAmount: "₦6,000,000",
      paidAmount: "₦0",
      branch: "Victoria Island Branch",
    },
    {
      contractNo: "CON005",
      accountNo: "ACC005",
      wofDate: "2025-07-25",
      customerId: "CID005",
      surname: "Musa",
      otherNames: "Fatima",
      totalWofAmount: "₦480,000",
      wofPrincipal: "₦400,000",
      wofInterest: "₦60,000",
      wofCharges: "₦20,000",
      outstandingAmount: "₦480,000",
      paidAmount: "₦0",
      branch: "Festac Town Branch",
    },
    {
      contractNo: "CON006",
      accountNo: "ACC006",
      wofDate: "2025-08-10",
      customerId: "CID006",
      surname: "Adekunle",
      otherNames: "Oluwafemi",
      totalWofAmount: "₦2,400,000",
      wofPrincipal: "₦2,000,000",
      wofInterest: "₦300,000",
      wofCharges: "₦100,000",
      outstandingAmount: "₦2,400,000",
      paidAmount: "₦0",
      branch: "Port Harcourt Branch",
    },
    {
      contractNo: "CON007",
      accountNo: "ACC007",
      wofDate: "2025-08-22",
      customerId: "CID007",
      surname: "Eze",
      otherNames: "Nkechi",
      totalWofAmount: "₦420,000",
      wofPrincipal: "₦350,000",
      wofInterest: "₦50,000",
      wofCharges: "₦20,000",
      outstandingAmount: "₦420,000",
      paidAmount: "₦0",
      branch: "Wuse 2 Branch",
    },
    {
      contractNo: "CON008",
      accountNo: "ACC008",
      wofDate: "2025-08-25",
      customerId: "CID008",
      surname: "Obi",
      otherNames: "Ifeanyi",
      totalWofAmount: "₦1,200,000",
      wofPrincipal: "₦1,000,000",
      wofInterest: "₦150,000",
      wofCharges: "₦50,000",
      outstandingAmount: "₦1,200,000",
      paidAmount: "₦0",
      branch: "Ibadan Branch",
    },
    {
      contractNo: "CON009",
      accountNo: "ACC009",
      wofDate: "2025-08-18",
      customerId: "CID009",
      surname: "Bello",
      otherNames: "Amina",
      totalWofAmount: "₦180,000",
      wofPrincipal: "₦150,000",
      wofInterest: "₦20,000",
      wofCharges: "₦10,000",
      outstandingAmount: "₦180,000",
      paidAmount: "₦0",
      branch: "Gombe Branch",
    },
    {
      contractNo: "CON010",
      accountNo: "ACC010",
      wofDate: "2025-08-29",
      customerId: "CID010",
      surname: "Oluwole",
      otherNames: "Segun",
      totalWofAmount: "₦960,000",
      wofPrincipal: "₦800,000",
      wofInterest: "₦120,000",
      wofCharges: "₦40,000",
      outstandingAmount: "₦960,000",
      paidAmount: "₦0",
      branch: "Ikorodu Branch",
    },
  ]);

  const parseAmount = (str) => parseFloat(str.replace(/[^0-9.-]+/g, "")) || 0;

  const filteredWriteOffs = writeOffs
    .filter((wo) => {
      const term = searchTerm.toLowerCase();
      const fullName = `${wo.otherNames || ""} ${wo.surname || ""}`
        .trim()
        .toLowerCase();
      return (
        fullName.includes(term) ||
        wo.contractNo.toLowerCase().includes(term) ||
        wo.customerId.toLowerCase().includes(term)
      );
    })
    .filter((wo) => {
      if (amountFilter === "All Amounts") return true;
      const amount = parseAmount(wo.totalWofAmount);
      if (amountFilter === "Up to ₦500,000") return amount <= 500000;
      if (amountFilter === "Up to ₦1,000,000") return amount <= 1000000;
      if (amountFilter === "Above ₦1,000,000") return amount > 1000000;
      return true;
    });

  const handleExportClick = () => setExportDropdown(!exportDropdown);
  const handleExportOption = (format) => {
    const worksheet = XLSX.utils.json_to_sheet(filteredWriteOffs);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "WriteOffs");
    const buf = XLSX.write(workbook, {
      bookType: format === "Excel" ? "xlsx" : format.toLowerCase(),
      type: "buffer",
    });
    const blob = new Blob([buf], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `WriteOffs_${format.toLowerCase()}.${
      format.toLowerCase() === "excel" ? "xlsx" : format.toLowerCase()
    }`; // Fixed to .xlsx for Excel
    link.click();
    window.URL.revokeObjectURL(url);
    setExportDropdown(false);
  };

  return (
    <div className="writeoff-section-container">
      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
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

      <div className="main-content">
        <div className="page-header">
          <h1>Write-off Report</h1>
          <p>View and manage all written-off loan accounts</p>
        </div>

        <div className="controls-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, contract, or customer ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filters">
            <select
              value={amountFilter}
              onChange={(e) => setAmountFilter(e.target.value)}
            >
              <option value="All Amounts">All Amounts</option>
              <option value="Up to ₦500,000">≤ ₦500,000</option>
              <option value="Up to ₦1,000,000">≤ ₦1,000,000</option>
              <option value="Above ₦1,000,000">Above ₦1,000,000</option>
            </select>
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

        <div className="table-container">
          <table className="writeoff-table">
            <thead>
              <tr>
                <th>Contract No.</th>
                <th>Customer</th>
                <th>WOF Date</th>
                <th>Total Written Off</th>
                <th>Outstanding</th>
                <th>Status</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>
              {filteredWriteOffs.map((wo, i) => (
                <tr key={i}>
                  <td>
                    <code>{wo.contractNo}</code>
                  </td>
                  <td>
                    <strong>
                      {wo.otherNames} {wo.surname}
                    </strong>
                  </td>
                  <td>{wo.wofDate}</td>
                  <td className="amount critical">{wo.totalWofAmount}</td>
                  <td className="amount critical">{wo.outstandingAmount}</td>
                  <td>
                    <span className="status-tag written-off">Written Off</span>
                  </td>
                  <td>{wo.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WriteOffSection;
