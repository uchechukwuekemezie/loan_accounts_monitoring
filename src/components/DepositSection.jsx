import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "../styles/DepositSection.css";
import logo1 from "../assets/Picture1.png";
import { FaSearch, FaFileExport, FaBars, FaTimes } from "react-icons/fa";

const DepositSection = () => {
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

  const [deposits, setDeposits] = useState([
    {
      customerName: "John Doe",
      customerNumber: "CUS001",
      accountNumber: "ACC001",
      depositAmount: "₦200,000",
      branch: "Main Branch",
      interestRate: "5%",
      productType: "Fixed Deposit",
      bookingDate: "2025-08-15",
      savingsOfficer: "Alice Smith",
      maturityDate: "2026-08-15",
      aaId: "AA001",
      dateOfBirth: "1995-05-10",
      phoneNumber: "+234 801 234 5678",
      gender: "Male",
      tenorDays: "365",
      age: 30,
    },
    {
      customerName: "Tunde Adewale",
      customerNumber: "CUS002",
      accountNumber: "ACC002",
      depositAmount: "₦1,500,000",
      branch: "Ikeja Branch",
      interestRate: "6.5%",
      productType: "Fixed Deposit",
      bookingDate: "2025-07-28",
      savingsOfficer: "Bola Adeyemi",
      maturityDate: "2026-07-28",
      aaId: "AA002",
      dateOfBirth: "1980-11-25",
      phoneNumber: "+234 905 678 1234",
      gender: "Male",
      tenorDays: "365",
      age: 45,
    },
    {
      customerName: "Chiamaka Okoro",
      customerNumber: "CUS003",
      accountNumber: "ACC003",
      depositAmount: "₦500,000",
      branch: "Surulere Branch",
      interestRate: "5.2%",
      productType: "Fixed Deposit",
      bookingDate: "2025-08-10",
      savingsOfficer: "Ngozi Emeka",
      maturityDate: "2026-08-10",
      aaId: "AA003",
      dateOfBirth: "1997-02-18",
      phoneNumber: "+234 816 789 0123",
      gender: "Female",
      tenorDays: "365",
      age: 28,
    },
    {
      customerName: "Usman Ibrahim",
      customerNumber: "CUS004",
      accountNumber: "ACC004",
      depositAmount: "₦5,000,000",
      branch: "Victoria Island Branch",
      interestRate: "6%",
      productType: "Fixed Deposit",
      bookingDate: "2025-08-20",
      savingsOfficer: "Femi Johnson",
      maturityDate: "2026-08-20",
      aaId: "AA004",
      dateOfBirth: "1973-09-01",
      phoneNumber: "+234 803 456 7890",
      gender: "Male",
      tenorDays: "365",
      age: 52,
    },
    {
      customerName: "Fatima Musa",
      customerNumber: "CUS005",
      accountNumber: "ACC005",
      depositAmount: "₦800,000",
      branch: "Festac Town Branch",
      interestRate: "5.5%",
      productType: "Fixed Deposit",
      bookingDate: "2025-07-25",
      savingsOfficer: "Grace Obasi",
      maturityDate: "2026-07-25",
      aaId: "AA005",
      dateOfBirth: "1990-04-30",
      phoneNumber: "+234 708 901 2345",
      gender: "Female",
      tenorDays: "365",
      age: 35,
    },
    {
      customerName: "Oluwafemi Adekunle",
      customerNumber: "CUS006",
      accountNumber: "ACC006",
      depositAmount: "₦2,500,000",
      branch: "Port Harcourt Branch",
      interestRate: "6.8%",
      productType: "Fixed Deposit",
      bookingDate: "2025-08-10",
      savingsOfficer: "Peter Obi",
      maturityDate: "2026-08-10",
      aaId: "AA006",
      dateOfBirth: "1984-07-15",
      phoneNumber: "+234 802 345 6789",
      gender: "Male",
      tenorDays: "365",
      age: 41,
    },
    {
      customerName: "Nkechi Eze",
      customerNumber: "CUS007",
      accountNumber: "ACC007",
      depositAmount: "₦300,000",
      branch: "Wuse 2 Branch",
      interestRate: "5.3%",
      productType: "Fixed Deposit",
      bookingDate: "2025-08-22",
      savingsOfficer: "Cynthia Okeke",
      maturityDate: "2026-08-22",
      aaId: "AA007",
      dateOfBirth: "2000-03-22",
      phoneNumber: "+234 811 234 5678",
      gender: "Female",
      tenorDays: "365",
      age: 25,
    },
    {
      customerName: "Ifeanyi Obi",
      customerNumber: "CUS008",
      accountNumber: "ACC008",
      depositAmount: "₦1,000,000",
      branch: "Ibadan Branch",
      interestRate: "5.8%",
      productType: "Fixed Deposit",
      bookingDate: "2025-08-25",
      savingsOfficer: "Tosin Adebayo",
      maturityDate: "2026-08-25",
      aaId: "AA008",
      dateOfBirth: "1970-01-05",
      phoneNumber: "+234 908 765 4321",
      gender: "Male",
      tenorDays: "365",
      age: 55,
    },
    {
      customerName: "Amina Bello",
      customerNumber: "CUS009",
      accountNumber: "ACC009",
      depositAmount: "₦150,000",
      branch: "Gombe Branch",
      interestRate: "5%",
      productType: "Fixed Deposit",
      bookingDate: "2025-08-18",
      savingsOfficer: "Sarah Kalu",
      maturityDate: "2026-08-18",
      aaId: "AA009",
      dateOfBirth: "2003-11-12",
      phoneNumber: "+234 807 654 3210",
      gender: "Female",
      tenorDays: "365",
      age: 22,
    },
    {
      customerName: "Segun Oluwole",
      customerNumber: "CUS010",
      accountNumber: "ACC010",
      depositAmount: "₦950,000",
      branch: "Ikorodu Branch",
      interestRate: "6.1%",
      productType: "Fixed Deposit",
      bookingDate: "2025-08-29",
      savingsOfficer: "Alice Smith",
      maturityDate: "2026-08-29",
      aaId: "AA010",
      dateOfBirth: "1988-08-08",
      phoneNumber: "+234 806 123 4567",
      gender: "Male",
      tenorDays: "365",
      age: 37,
    },
  ]);

  const parseAmount = (str) =>
    parseFloat((str || "").replace(/[^0-9.-]+/g, "")) || 0;

  const filteredDeposits = deposits
    .filter((d) => {
      const term = searchTerm.toLowerCase();
      return (
        d.customerName.toLowerCase().includes(term) ||
        d.customerNumber.toLowerCase().includes(term) ||
        d.accountNumber.toLowerCase().includes(term)
      );
    })
    .filter((d) => {
      if (amountFilter === "All Amounts") return true;
      const amount = parseAmount(d.depositAmount);
      if (amountFilter === "Up to ₦500,000") return amount <= 500000;
      if (amountFilter === "Up to ₦1,000,000") return amount <= 1000000;
      if (amountFilter === "Above ₦1,000,000") return amount > 1000000;
      return true;
    });

  const handleExportClick = () => setExportDropdown(!exportDropdown);
  const handleExportOption = (format) => {
    const worksheet = XLSX.utils.json_to_sheet(filteredDeposits);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Deposits");
    const buf = XLSX.write(workbook, {
      bookType: format === "Excel" ? "xlsx" : format.toLowerCase(),
      type: "buffer",
    });
    const blob = new Blob([buf], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Deposits_${format.toLowerCase()}.${
      format.toLowerCase() === "excel" ? "xlsx" : format.toLowerCase()
    }`; // Fixed to .xlsx for Excel
    link.click();
    window.URL.revokeObjectURL(url);
    setExportDropdown(false);
  };

  return (
    <div className="deposit-container">
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

      {/* The main content */}
      <div className="main-content">
        <div className="page-header">
          <h1>Deposit Report</h1>
          <p>Track all active fixed deposit accounts and performance</p>
        </div>

        <div className="controls-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, CIF, or account number..."
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
              <option value="Up to ₦500,000">
                Less than or equal to ₦500,000
              </option>
              <option value="Up to ₦1,000,000">
                Less than or equal to ₦1,000,000
              </option>
              <option value="Above ₦1,000,000">Greater than ₦1,000,000</option>
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
          <table className="deposit-table">
            <thead>
              <tr>
                <th>CIF</th>
                <th>Customer Name</th>
                <th>Account No.</th>
                <th>Booking Date</th>
                <th>Deposit Amount</th>
                <th>Officer</th>
                <th>Maturity</th>
                <th>Status</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>
              {filteredDeposits.map((d, i) => (
                <tr key={i}>
                  <td>
                    <code>{d.customerNumber}</code>
                  </td>
                  <td>
                    <strong>{d.customerName}</strong>
                  </td>
                  <td>
                    <code>{d.accountNumber}</code>
                  </td>
                  <td>{d.bookingDate}</td>
                  <td className="amount positive">{d.depositAmount}</td>
                  <td>{d.savingsOfficer}</td>
                  <td>{d.maturityDate}</td>
                  <td>
                    <span className="status-tag active">Active</span>
                  </td>
                  <td>{d.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepositSection;
