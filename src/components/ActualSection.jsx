import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "../styles/ActualSection.css";
import logo1 from "../assets/Picture1.png";
import { FaSearch, FaFileExport, FaBars, FaTimes } from "react-icons/fa";

const ActualSection = () => {
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
  const [loanTypeFilter, setLoanTypeFilter] = useState("All Types");
  const [exportDropdown, setExportDropdown] = useState(false);

  const [actuals, setActuals] = useState([
    {
      contractNumber: "CON001",
      cif: "CIF001",
      cef: "CEF001",
      nameOfClient: "John Doe",
      loanOfficer: "Alice Smith",
      loanCycle: "1",
      dateDisbursed: "2025-08-01",
      amountDisbursed: "₦500,000",
      loanTerm: "12 months",
      loanType: "Personal Loan",
      telephone: "+234 801 234 5678",
      accountNumber: "ACC001",
      accountBalance: "₦450,000",
      transCode: "TRN001",
      transNarration: "Loan Disbursement",
      paymentDate: "2025-08-15",
      amountPaid: "₦50,000",
      branch: "Main Branch",
    },
    {
      contractNumber: "CON002",
      cif: "CIF002",
      cef: "CEF002",
      nameOfClient: "Tunde Adewale",
      loanOfficer: "Bola Adeyemi",
      loanCycle: "2",
      dateDisbursed: "2024-03-20",
      amountDisbursed: "₦1,500,000",
      loanTerm: "24 months",
      loanType: "Business Loan",
      telephone: "+234 905 678 1234",
      accountNumber: "ACC002",
      accountBalance: "₦850,000",
      transCode: "TRN002",
      transNarration: "Loan Repayment",
      paymentDate: "2025-08-28",
      amountPaid: "₦75,000",
      branch: "Ikeja Branch",
    },
    {
      contractNumber: "CON003",
      cif: "CIF003",
      cef: "CEF003",
      nameOfClient: "Chiamaka Okoro",
      loanOfficer: "Ngozi Emeka",
      loanCycle: "1",
      dateDisbursed: "2024-08-10",
      amountDisbursed: "₦250,000",
      loanTerm: "18 months",
      loanType: "Personal Loan",
      telephone: "+234 816 789 0123",
      accountNumber: "ACC003",
      accountBalance: "₦180,000",
      transCode: "TRN003",
      transNarration: "Loan Repayment",
      paymentDate: "2025-08-30",
      amountPaid: "₦20,000",
      branch: "Surulere Branch",
    },
    {
      contractNumber: "CON004",
      cif: "CIF004",
      cef: "CEF004",
      nameOfClient: "Usman Ibrahim",
      loanOfficer: "Femi Johnson",
      loanCycle: "3",
      dateDisbursed: "2023-11-05",
      amountDisbursed: "₦5,000,000",
      loanTerm: "36 months",
      loanType: "Micro Loan",
      telephone: "+234 803 456 7890",
      accountNumber: "ACC004",
      accountBalance: "₦1,200,000",
      transCode: "TRN004",
      transNarration: "Loan Repayment",
      paymentDate: "2025-08-28",
      amountPaid: "₦150,000",
      branch: "Victoria Island Branch",
    },
    {
      contractNumber: "CON005",
      cif: "CIF005",
      cef: "CEF005",
      nameOfClient: "Fatima Musa",
      loanOfficer: "Grace Obasi",
      loanCycle: "1",
      dateDisbursed: "2024-06-12",
      amountDisbursed: "₦400,000",
      loanTerm: "24 months",
      loanType: "Personal Loan",
      telephone: "+234 708 901 2345",
      accountNumber: "ACC005",
      accountBalance: "₦350,000",
      transCode: "TRN005",
      transNarration: "Loan Repayment",
      paymentDate: "2025-08-29",
      amountPaid: "₦35,000",
      branch: "Festac Town Branch",
    },
    {
      contractNumber: "CON006",
      cif: "CIF006",
      cef: "CEF006",
      nameOfClient: "Oluwafemi Adekunle",
      loanOfficer: "Peter Obi",
      loanCycle: "4",
      dateDisbursed: "2023-01-25",
      amountDisbursed: "₦2,000,000",
      loanTerm: "36 months",
      loanType: "Business Loan",
      telephone: "+234 802 345 6789",
      accountNumber: "ACC006",
      accountBalance: "₦900,000",
      transCode: "TRN006",
      transNarration: "Loan Repayment",
      paymentDate: "2025-08-25",
      amountPaid: "₦60,000",
      branch: "Port Harcourt Branch",
    },
    {
      contractNumber: "CON007",
      cif: "CIF007",
      cef: "CEF007",
      nameOfClient: "Nkechi Eze",
      loanOfficer: "Cynthia Okeke",
      loanCycle: "1",
      dateDisbursed: "2024-09-01",
      amountDisbursed: "₦350,000",
      loanTerm: "12 months",
      loanType: "Personal Loan",
      telephone: "+234 811 234 5678",
      accountNumber: "ACC007",
      accountBalance: "₦280,000",
      transCode: "TRN007",
      transNarration: "Loan Repayment",
      paymentDate: "2025-08-31",
      amountPaid: "₦30,000",
      branch: "Wuse 2 Branch",
    },
    {
      contractNumber: "CON008",
      cif: "CIF008",
      cef: "CEF008",
      nameOfClient: "Ifeanyi Obi",
      loanOfficer: "Tosin Adebayo",
      loanCycle: "5",
      dateDisbursed: "2022-04-18",
      amountDisbursed: "₦1,000,000",
      loanTerm: "48 months",
      loanType: "Micro Loan",
      telephone: "+234 908 765 4321",
      accountNumber: "ACC008",
      accountBalance: "₦250,000",
      transCode: "TRN008",
      transNarration: "Loan Repayment",
      paymentDate: "2025-08-29",
      amountPaid: "₦25,000",
      branch: "Ibadan Branch",
    },
    {
      contractNumber: "CON009",
      cif: "CIF009",
      cef: "CEF009",
      nameOfClient: "Amina Bello",
      loanOfficer: "Sarah Kalu",
      loanCycle: "1",
      dateDisbursed: "2025-02-01",
      amountDisbursed: "₦150,000",
      loanTerm: "12 months",
      loanType: "Personal Loan",
      telephone: "+234 807 654 3210",
      accountNumber: "ACC009",
      accountBalance: "₦140,000",
      transCode: "TRN009",
      transNarration: "Loan Repayment",
      paymentDate: "2025-08-25",
      amountPaid: "₦15,000",
      branch: "Gombe Branch",
    },
    {
      contractNumber: "CON010",
      cif: "CIF010",
      cef: "CEF010",
      nameOfClient: "Segun Oluwole",
      loanOfficer: "Alice Smith",
      loanCycle: "2",
      dateDisbursed: "2024-10-20",
      amountDisbursed: "₦800,000",
      loanTerm: "18 months",
      loanType: "Business Loan",
      telephone: "+234 806 123 4567",
      accountNumber: "ACC010",
      accountBalance: "₦650,000",
      transCode: "TRN010",
      transNarration: "Loan Repayment",
      paymentDate: "2025-08-30",
      amountPaid: "₦45,000",
      branch: "Ikorodu Branch",
    },
  ]);

  const filteredActuals = actuals
    .filter((a) => {
      const term = searchTerm.toLowerCase();
      return (
        a.nameOfClient.toLowerCase().includes(term) ||
        a.cif.toLowerCase().includes(term) ||
        a.accountNumber.toLowerCase().includes(term)
      );
    })
    .filter(
      (a) => loanTypeFilter === "All Types" || a.loanType === loanTypeFilter
    );

  const uniqueLoanTypes = [
    "All Types",
    ...new Set(actuals.map((a) => a.loanType)),
  ];

  const handleExportClick = () => setExportDropdown(!exportDropdown);
  const handleExportOption = (format) => {
    const worksheet = XLSX.utils.json_to_sheet(filteredActuals);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Actuals");
    const buf = XLSX.write(workbook, {
      bookType: format === "Excel" ? "xlsx" : format.toLowerCase(),
      type: "buffer",
    });
    const blob = new Blob([buf], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Actuals_${format.toLowerCase()}.${
      format.toLowerCase() === "excel" ? "xlsx" : format.toLowerCase()
    }`; // Fixed to .xlsx for Excel
    link.click();
    window.URL.revokeObjectURL(url);
    setExportDropdown(false);
  };

  return (
    <div className="actual-container">
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
          <h1>Actual Repayments Reports</h1>
          <p>Track all loan repayments and performance in real time.</p>
        </div>

        <div className="controls-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by client name, CIF, or account number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filters">
            <select
              value={loanTypeFilter}
              onChange={(e) => setLoanTypeFilter(e.target.value)}
            >
              {uniqueLoanTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
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
          <table className="actual-table">
            <thead>
              <tr>
                <th>CIF</th>
                <th>Client Name</th>
                <th>Account No.</th>
                <th>Payment Date</th>
                <th>Amount Paid</th>
                <th>Loan Officer</th>
                <th>Loan Type</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>
              {filteredActuals.map((a, i) => (
                <tr key={i}>
                  <td>
                    <code>{a.cif}</code>
                  </td>
                  <td>
                    <strong>{a.nameOfClient}</strong>
                  </td>
                  <td>
                    <code>{a.accountNumber}</code>
                  </td>
                  <td>{a.paymentDate}</td>
                  <td className="amount positive">{a.amountPaid}</td>
                  <td>{a.loanOfficer}</td>
                  <td>
                    <span
                      className={`loan-type ${a.loanType
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {a.loanType}
                    </span>
                  </td>
                  <td>{a.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActualSection;
