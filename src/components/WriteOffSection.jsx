import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "../styles/WriteOffSection.css";
import logo1 from "../assets/accion-logo-svg-orange.svg";
import { FaSearch, FaCalendarAlt, FaFile } from "react-icons/fa";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [amountFilter, setAmountFilter] = useState("All Amounts");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
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

  const filteredWriteOffs = writeOffs.filter(
    (writeOff) =>
      (writeOff.customerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        writeOff.contractNo.includes(searchTerm)) &&
      (amountFilter === "All Amounts" ||
        parseFloat(writeOff.totalWofAmount.replace("₦", "").replace(",", "")) <=
          parseFloat(amountFilter.replace("₦", "").replace(",", "")) ||
        amountFilter === "Above ₦1,000,000") &&
      (statusFilter === "All Statuses" ||
        (statusFilter === "Unpaid" &&
          parseFloat(writeOff.paidAmount.replace("₦", "").replace(",", "")) ===
            0) ||
        statusFilter === "Partially Paid") // Placeholder; adjust based on actual status logic
  );

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

      <div className="writeoff-section-white-div">
        <div className="writeoff-section-content">
          <div className="writeoff-report-header">
            <div className="writeoff-report-title">
              <h2>Write-Off Report</h2>
            </div>
            {/* <div className="writeoff-time-buttons">
              <button>Day</button>
              <button>Week</button>
              <button>Month</button>
              <button>Year</button>
              <button>All Time</button>
              <button>
                <FaCalendarAlt /> Custom Date
              </button>
            </div> */}
            <div className="writeoff-export-button">
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
          <div className="writeoff-table-controls">
            <div className="writeoff-search-bar">
              <input
                type="text"
                placeholder="Search customer ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="search-icon" />
            </div>
            <div className="writeoff-filter-spacer" />
            <select
              value={amountFilter}
              onChange={(e) => setAmountFilter(e.target.value)}
              className="writeoff-amount-filter"
            >
              <option value="All Amounts">Amount Disbursed</option>
              <option value="₦500,000">Up to ₦500,000</option>
              <option value="₦1,000,000">Up to ₦1,000,000</option>
              <option value="Above ₦1,000,000">Above ₦1,000,000</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="writeoff-status-filter"
            >
              <option value="All Statuses">Loan Status</option>
              <option value="Unpaid">Unpaid</option>
              <option value="Partially Paid">Partially Paid</option>
            </select>
          </div>
          <div className="writeoff-table-section">
            <table className="writeoff-table">
              <thead>
                <tr>
                  <th>Contract No</th>
                  <th>Customer ID</th>
                  <th>Total WOF Amount</th>
                  <th>Outstanding Amount</th>
                  <th>Branch</th>
                </tr>
              </thead>
              <tbody>
                {filteredWriteOffs.map((writeOff, index) => (
                  <tr key={index}>
                    <td>{writeOff.contractNo}</td>
                    <td>{writeOff.customerId}</td>
                    <td>{writeOff.totalWofAmount}</td>
                    <td>{writeOff.outstandingAmount}</td>
                    <td>{writeOff.branch}</td>
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

export default WriteOffSection;
