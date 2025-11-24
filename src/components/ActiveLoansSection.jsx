import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "../styles/ActiveLoansSection.css";
import logo1 from "../assets/Picture1.png";
import { FaSearch, FaFileExport, FaBars, FaTimes } from "react-icons/fa";

const ActiveLoansSection = () => {
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
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [exportDropdown, setExportDropdown] = useState(false);

  const [loans, setLoans] = useState([
    {
      cifNo: "CIF001",
      cefNo: "CEF001",
      contractNo: "CON001",
      clientName: "John Doe",
      mobileNo: "+234 801 234 5678",
      identityParticulars: "ID123456",
      gender: "Male",
      dateOfBirth: "1995-05-10",
      maritalStatus: "Single",
      address: "123 Main St, Lagos",
      productCategory: "Personal Loan",
      sector: "Retail",
      businessType: "Individual",
      businessActivity: "Trading",
      businessAddress: "456 Business Rd, Lagos",
      disbursedDate: "2025-01-15",
      amountDisbursed: "₦500,000",
      contractAmount: "₦600,000",
      maturityDate: "2026-01-15",
      drawdownAccount: "ACC001",
      loanCycle: "1",
      balanceOutstanding: "₦450,000",
      status: "Active",
      ovdIntPenSprdChg: "₦5,000",
      cifLoanOfficer: "Alice Smith",
      approvalOfficer: "Bob Johnson",
      savingsOfficer: "Clara Brown",
      recoveryOfficer: "David Lee",
      groupId: "GRP001",
      groupName: "Lagos Traders",
      interestRateMonthly: "2%",
      branch: "Main Branch",
    },

    {
      cifNo: "CIF002",
      cefNo: "CEF002",
      contractNo: "CON002",
      clientName: "Tunde Adewale",
      mobileNo: "+234 905 678 1234",
      identityParticulars: "ID789012",
      gender: "Male",
      dateOfBirth: "1980-11-25",
      maritalStatus: "Married",
      address: "5 Ojo Street, Ikeja, Lagos",
      productCategory: "Business Loan",
      sector: "Manufacturing",
      businessType: "SME",
      businessActivity: "Fabrication",
      businessAddress: "10 Lagos-Abeokuta Expressway, Lagos",
      disbursedDate: "2024-03-20",
      amountDisbursed: "₦1,500,000",
      contractAmount: "₦1,800,000",
      maturityDate: "2025-03-20",
      drawdownAccount: "ACC002",
      loanCycle: "2",
      balanceOutstanding: "₦850,000",
      status: "Active",
      ovdIntPenSprdChg: "₦15,000",
      cifLoanOfficer: "Bola Adeyemi",
      approvalOfficer: "Segun Olaniyan",
      savingsOfficer: "Funke Williams",
      recoveryOfficer: "Grace Obasi",
      groupId: "GRP002",
      groupName: "Ikeja Fabricators",
      interestRateMonthly: "2.5%",
      branch: "Ikeja Branch",
    },
    {
      cifNo: "CIF003",
      cefNo: "CEF003",
      contractNo: "CON003",
      clientName: "Chiamaka Okoro",
      mobileNo: "+234 816 789 0123",
      identityParticulars: "ID345678",
      gender: "Female",
      dateOfBirth: "1997-02-18",
      maritalStatus: "Single",
      address: "7 Enugu Road, Surulere, Lagos",
      productCategory: "Personal Loan",
      sector: "Service",
      businessType: "Individual",
      businessActivity: "Hairdressing",
      businessAddress: "12 Surulere Market, Lagos",
      disbursedDate: "2024-08-10",
      amountDisbursed: "₦250,000",
      contractAmount: "₦300,000",
      maturityDate: "2025-08-10",
      drawdownAccount: "ACC003",
      loanCycle: "1",
      balanceOutstanding: "₦180,000",
      status: "Active",
      ovdIntPenSprdChg: "₦2,000",
      cifLoanOfficer: "Ngozi Emeka",
      approvalOfficer: "Kunle Adebayo",
      savingsOfficer: "Uche Nwachukwu",
      recoveryOfficer: "David Lee",
      groupId: "GRP003",
      groupName: "Surulere Stylists",
      interestRateMonthly: "3%",
      branch: "Surulere Branch",
    },
    {
      cifNo: "CIF004",
      cefNo: "CEF004",
      contractNo: "CON004",
      clientName: "Usman Ibrahim",
      mobileNo: "+234 803 456 7890",
      identityParticulars: "ID901234",
      gender: "Male",
      dateOfBirth: "1973-09-01",
      maritalStatus: "Married",
      address: "9 Sokoto Street, Victoria Island, Lagos",
      productCategory: "Micro Loan",
      sector: "Trade",
      businessType: "Partnership",
      businessActivity: "Oil and Gas",
      businessAddress: "15 Adeola Odeku, VI, Lagos",
      disbursedDate: "2023-11-05",
      amountDisbursed: "₦5,000,000",
      contractAmount: "₦6,000,000",
      maturityDate: "2024-11-05",
      drawdownAccount: "ACC004",
      loanCycle: "3",
      balanceOutstanding: "₦1,200,000",
      status: "Active",
      ovdIntPenSprdChg: "₦50,000",
      cifLoanOfficer: "Femi Johnson",
      approvalOfficer: "Aisha Yusuf",
      savingsOfficer: "Mohammed Bello",
      recoveryOfficer: "Clara Brown",
      groupId: "GRP004",
      groupName: "Victoria Island Petroleum",
      interestRateMonthly: "1.5%",
      branch: "Victoria Island Branch",
    },
    {
      cifNo: "CIF005",
      cefNo: "CEF005",
      contractNo: "CON005",
      clientName: "Fatima Musa",
      mobileNo: "+234 708 901 2345",
      identityParticulars: "ID567890",
      gender: "Female",
      dateOfBirth: "1990-04-30",
      maritalStatus: "Married",
      address: "25 Kano Road, Festac, Lagos",
      productCategory: "Personal Loan",
      sector: "Retail",
      businessType: "Individual",
      businessActivity: "Fashion",
      businessAddress: "5 Festac Link Road, Lagos",
      disbursedDate: "2024-06-12",
      amountDisbursed: "₦400,000",
      contractAmount: "₦480,000",
      maturityDate: "2025-06-12",
      drawdownAccount: "ACC005",
      loanCycle: "1",
      balanceOutstanding: "₦350,000",
      status: "Active",
      ovdIntPenSprdChg: "₦4,500",
      cifLoanOfficer: "Grace Obasi",
      approvalOfficer: "David Eze",
      savingsOfficer: "Hassan Ahmed",
      recoveryOfficer: "Alice Smith",
      groupId: "GRP005",
      groupName: "Festac Fashion Group",
      interestRateMonthly: "2.8%",
      branch: "Festac Town Branch",
    },
    {
      cifNo: "CIF006",
      cefNo: "CEF006",
      contractNo: "CON006",
      clientName: "Oluwafemi Adekunle",
      mobileNo: "+234 802 345 6789",
      identityParticulars: "ID234567",
      gender: "Male",
      dateOfBirth: "1984-07-15",
      maritalStatus: "Married",
      address: "3 Aba Road, Port Harcourt, Rivers",
      productCategory: "Business Loan",
      sector: "Agriculture",
      businessType: "Limited Liability",
      businessActivity: "Poultry Farming",
      businessAddress: "11 Trans Amadi Layout, Port Harcourt",
      disbursedDate: "2023-01-25",
      amountDisbursed: "₦2,000,000",
      contractAmount: "₦2,400,000",
      maturityDate: "2024-01-25",
      drawdownAccount: "ACC006",
      loanCycle: "4",
      balanceOutstanding: "₦900,000",
      status: "Active",
      ovdIntPenSprdChg: "₦20,000",
      cifLoanOfficer: "Peter Obi",
      approvalOfficer: "Helen Ojo",
      savingsOfficer: "Chioma Nwosu",
      recoveryOfficer: "Bob Johnson",
      groupId: "GRP006",
      groupName: "Rivers Farmers Co-op",
      interestRateMonthly: "2%",
      branch: "Port Harcourt Branch",
    },
    {
      cifNo: "CIF007",
      cefNo: "CEF007",
      contractNo: "CON007",
      clientName: "Nkechi Eze",
      mobileNo: "+234 811 234 5678",
      identityParticulars: "ID890123",
      gender: "Female",
      dateOfBirth: "2000-03-22",
      maritalStatus: "Single",
      address: "8 Umuahia Street, Abuja, FCT",
      productCategory: "Personal Loan",
      sector: "Technology",
      businessType: "Individual",
      businessActivity: "Software Development",
      businessAddress: "2 Wuse Market, Abuja",
      disbursedDate: "2024-09-01",
      amountDisbursed: "₦350,000",
      contractAmount: "₦420,000",
      maturityDate: "2025-09-01",
      drawdownAccount: "ACC007",
      loanCycle: "1",
      balanceOutstanding: "₦280,000",
      status: "Active",
      ovdIntPenSprdChg: "₦3,500",
      cifLoanOfficer: "Cynthia Okeke",
      approvalOfficer: "Emeka Ibe",
      savingsOfficer: "Adaeze Okorie",
      recoveryOfficer: "Clara Brown",
      groupId: "GRP007",
      groupName: "Abuja Tech Hub",
      interestRateMonthly: "2.2%",
      branch: "Wuse 2 Branch",
    },
    {
      cifNo: "CIF008",
      cefNo: "CEF008",
      contractNo: "CON008",
      clientName: "Ifeanyi Obi",
      mobileNo: "+234 908 765 4321",
      identityParticulars: "ID456789",
      gender: "Male",
      dateOfBirth: "1970-01-05",
      maritalStatus: "Married",
      address: "15 Oba Market Road, Ibadan, Oyo",
      productCategory: "Micro Loan",
      sector: "Retail",
      businessType: "Partnership",
      businessActivity: "General Merchandise",
      businessAddress: "20 Ring Road, Ibadan",
      disbursedDate: "2022-04-18",
      amountDisbursed: "₦1,000,000",
      contractAmount: "₦1,200,000",
      maturityDate: "2023-04-18",
      drawdownAccount: "ACC008",
      loanCycle: "5",
      balanceOutstanding: "₦250,000",
      status: "Overdue",
      ovdIntPenSprdChg: "₦10,000",
      cifLoanOfficer: "Tosin Adebayo",
      approvalOfficer: "Bisi Oladipo",
      savingsOfficer: "Kunle Lawal",
      recoveryOfficer: "David Lee",
      groupId: "GRP008",
      groupName: "Ibadan Traders",
      interestRateMonthly: "2.5%",
      branch: "Ibadan Branch",
    },
    {
      cifNo: "CIF009",
      cefNo: "CEF009",
      contractNo: "CON009",
      clientName: "Amina Bello",
      mobileNo: "+234 807 654 3210",
      identityParticulars: "ID102938",
      gender: "Female",
      dateOfBirth: "2003-11-12",
      maritalStatus: "Single",
      address: "4 Kaduna Street, Gombe, Gombe",
      productCategory: "Personal Loan",
      sector: "Education",
      businessType: "Individual",
      businessActivity: "Tutoring",
      businessAddress: "7 Gombe Main Market, Gombe",
      disbursedDate: "2025-02-01",
      amountDisbursed: "₦150,000",
      contractAmount: "₦180,000",
      maturityDate: "2026-02-01",
      drawdownAccount: "ACC009",
      loanCycle: "1",
      balanceOutstanding: "₦140,000",
      status: "Active",
      ovdIntPenSprdChg: "₦1,500",
      cifLoanOfficer: "Sarah Kalu",
      approvalOfficer: "Musa Audu",
      savingsOfficer: "Zainab Abubakar",
      recoveryOfficer: "Bob Johnson",
      groupId: "GRP009",
      groupName: "Gombe Tutors",
      interestRateMonthly: "3%",
      branch: "Gombe Branch",
    },
    {
      cifNo: "CIF010",
      cefNo: "CEF010",
      contractNo: "CON010",
      clientName: "Segun Oluwole",
      mobileNo: "+234 806 123 4567",
      identityParticulars: "ID987654",
      gender: "Male",
      dateOfBirth: "1988-08-08",
      maritalStatus: "Divorced",
      address: "22 Ogunlana Drive, Surulere, Lagos",
      productCategory: "Business Loan",
      sector: "Transport",
      businessType: "SME",
      businessActivity: "Logistics",
      businessAddress: "35 Ikorodu Road, Lagos",
      disbursedDate: "2024-10-20",
      amountDisbursed: "₦800,000",
      contractAmount: "₦960,000",
      maturityDate: "2025-10-20",
      drawdownAccount: "ACC010",
      loanCycle: "2",
      balanceOutstanding: "₦650,000",
      status: "Active",
      ovdIntPenSprdChg: "₦8,000",
      cifLoanOfficer: "Alice Smith",
      approvalOfficer: "David Lee",
      savingsOfficer: "Clara Brown",
      recoveryOfficer: "Bob Johnson",
      groupId: "GRP010",
      groupName: "Lagos Logistics",
      interestRateMonthly: "2.1%",
      branch: "Ikorodu Branch",
    },
  ]);

  const parseAmount = (str) => {
    return parseFloat(str.replace(/[^0-9.-]+/g, "")) || 0;
  };

  const filteredLoans = loans
    .filter(
      (loan) =>
        loan.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loan.cifNo.includes(searchTerm) ||
        loan.contractNo?.includes(searchTerm)
    )
    .filter((loan) => {
      if (amountFilter === "All Amounts") return true;
      const amount = parseAmount(loan.amountDisbursed);
      if (amountFilter === "Up to ₦500,000") return amount <= 500000;
      if (amountFilter === "Up to ₦1,000,000") return amount <= 1000000;
      if (amountFilter === "Above ₦1,000,000") return amount > 1000000;
      return true;
    })
    .filter(
      (loan) => statusFilter === "All Statuses" || loan.status === statusFilter
    );

  const handleExportClick = () => setExportDropdown(!exportDropdown);
  const handleExportOption = (format) => {
    const worksheet = XLSX.utils.json_to_sheet(filteredLoans);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "ActiveLoans");
    const buf = XLSX.write(workbook, {
      bookType: format === "Excel" ? "xlsx" : format.toLowerCase(),
      type: "buffer",
    });
    const blob = new Blob([buf], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ActiveLoans_${format.toLowerCase()}.${
      format.toLowerCase() === "excel" ? "xlsx" : format.toLowerCase()
    }`;
    link.click();
    window.URL.revokeObjectURL(url);
    setExportDropdown(false);
  };

  return (
    <div className="active-loans-section-container">
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

      <div className="main-content">
        <div className="page-header">
          <h1>Active Loans Report</h1>
          <p>Monitor and manage all active loan accounts</p>
        </div>

        <div className="controls-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, CIF, or contract..."
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

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All Statuses">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Overdue">Overdue</option>
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
          <table className="loans-table">
            <thead>
              <tr>
                <th>CIF #</th>
                <th>Client Name</th>
                <th>Product</th>
                <th>Disbursed</th>
                <th>Outstanding</th>
                <th>Status</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>
              {filteredLoans.map((loan, i) => (
                <tr key={i}>
                  <td>
                    <code>{loan.cifNo}</code>
                  </td>
                  <td>
                    <strong>{loan.clientName}</strong>
                  </td>
                  <td>{loan.productCategory}</td>
                  <td className="amount">{loan.amountDisbursed}</td>
                  <td className="amount">{loan.balanceOutstanding}</td>
                  <td>
                    <span className={`status-tag ${loan.status.toLowerCase()}`}>
                      {loan.status}
                    </span>
                  </td>
                  <td>{loan.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActiveLoansSection;
