import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DelinquencySection.css";
import logo1 from "../assets/Picture1.png";
import * as XLSX from "xlsx";
import { FaSearch, FaFileExport, FaBars, FaTimes } from "react-icons/fa";

const DelinquencySection = () => {
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
  const [daysDueFilter, setDaysDueFilter] = useState("All Statuses");
  const [exportDropdown, setExportDropdown] = useState(false);

  const [delinquencies, setDelinquencies] = useState([
    {
      contractNo: "CON001",
      cifNo: "CIF001",
      cefNo: "CEF001",
      customerName: "John Doe",
      sector: "Retail",
      cifLoanOfficer: "Alice Smith",
      loanCycle: "1",
      amountDisbursed: "₦500,000",
      disbursedDate: "2025-01-15",
      telephone: "+234 801 234 5678",
      installmentNumber: "5",
      loanType: "Personal Loan",
      term: "12 months",
      lastDateOfPayment: "2025-07-15",
      numberOfDaysDue: "30",
      totalExpected: "₦50,000",
      balanceOutstanding: "₦450,000",
      principalInArrears: "₦20,000",
      interestInArrears: "₦5,000",
      acctNumber: "ACC001",
      balInSavingAccts: "₦10,000",
      status: "Delinquent",
      amountToPay: "₦25,000",
      percentOnSavingAccts: "2%",
      guarantorName: "Jane Doe",
      guarantorTelNo: "+234 802 345 6789",
      guarantorHomeAddress: "123 Main St, Lagos",
      guarantorBusinessAddress: "456 Business Rd, Lagos",
      groupId: "GRP001",
      groupName: "Lagos Traders",
      branch: "Main Branch",
    },
    {
      contractNo: "CON002",
      cifNo: "CIF002",
      cefNo: "CEF002",
      customerName: "Tunde Adewale",
      sector: "Manufacturing",
      cifLoanOfficer: "Bola Adeyemi",
      loanCycle: "2",
      amountDisbursed: "₦1,500,000",
      disbursedDate: "2024-03-20",
      telephone: "+234 905 678 1234",
      installmentNumber: "18",
      loanType: "Business Loan",
      term: "24 months",
      lastDateOfPayment: "2025-08-15",
      numberOfDaysDue: "15",
      totalExpected: "₦75,000",
      balanceOutstanding: "₦850,000",
      principalInArrears: "₦30,000",
      interestInArrears: "₦5,000",
      acctNumber: "ACC002",
      balInSavingAccts: "₦25,000",
      status: "Delinquent",
      amountToPay: "₦35,000",
      percentOnSavingAccts: "1.7%",
      guarantorName: "Funke Williams",
      guarantorTelNo: "+234 803 456 7890",
      guarantorHomeAddress: "5 Ojo Street, Ikeja, Lagos",
      guarantorBusinessAddress: "10 Lagos-Abeokuta Expressway, Lagos",
      groupId: "GRP002",
      groupName: "Ikeja Fabricators",
      branch: "Ikeja Branch",
    },
    {
      contractNo: "CON003",
      cifNo: "CIF003",
      cefNo: "CEF003",
      customerName: "Chiamaka Okoro",
      sector: "Service",
      cifLoanOfficer: "Ngozi Emeka",
      loanCycle: "1",
      amountDisbursed: "₦250,000",
      disbursedDate: "2024-08-10",
      telephone: "+234 816 789 0123",
      installmentNumber: "12",
      loanType: "Personal Loan",
      term: "18 months",
      lastDateOfPayment: "2025-08-25",
      numberOfDaysDue: "6",
      totalExpected: "₦20,000",
      balanceOutstanding: "₦180,000",
      principalInArrears: "₦10,000",
      interestInArrears: "₦1,000",
      acctNumber: "ACC003",
      balInSavingAccts: "₦5,000",
      status: "Delinquent",
      amountToPay: "₦11,000",
      percentOnSavingAccts: "2.2%",
      guarantorName: "Uche Nwachukwu",
      guarantorTelNo: "+234 818 234 5678",
      guarantorHomeAddress: "7 Enugu Road, Surulere, Lagos",
      guarantorBusinessAddress: "12 Surulere Market, Lagos",
      groupId: "GRP003",
      groupName: "Surulere Stylists",
      branch: "Surulere Branch",
    },
    {
      contractNo: "CON004",
      cifNo: "CIF004",
      cefNo: "CEF004",
      customerName: "Usman Ibrahim",
      sector: "Trade",
      cifLoanOfficer: "Femi Johnson",
      loanCycle: "3",
      amountDisbursed: "₦5,000,000",
      disbursedDate: "2023-11-05",
      telephone: "+234 803 456 7890",
      installmentNumber: "21",
      loanType: "Micro Loan",
      term: "36 months",
      lastDateOfPayment: "2025-08-10",
      numberOfDaysDue: "21",
      totalExpected: "₦150,000",
      balanceOutstanding: "₦1,200,000",
      principalInArrears: "₦75,000",
      interestInArrears: "₦10,000",
      acctNumber: "ACC004",
      balInSavingAccts: "₦100,000",
      status: "Delinquent",
      amountToPay: "₦85,000",
      percentOnSavingAccts: "2%",
      guarantorName: "Mohammed Bello",
      guarantorTelNo: "+234 804 567 8901",
      guarantorHomeAddress: "9 Sokoto Street, Victoria Island, Lagos",
      guarantorBusinessAddress: "15 Adeola Odeku, VI, Lagos",
      groupId: "GRP004",
      groupName: "Victoria Island Petroleum",
      branch: "Victoria Island Branch",
    },
    {
      contractNo: "CON005",
      cifNo: "CIF005",
      cefNo: "CEF005",
      customerName: "Fatima Musa",
      sector: "Retail",
      cifLoanOfficer: "Grace Obasi",
      loanCycle: "1",
      amountDisbursed: "₦400,000",
      disbursedDate: "2024-06-12",
      telephone: "+234 708 901 2345",
      installmentNumber: "15",
      loanType: "Personal Loan",
      term: "24 months",
      lastDateOfPayment: "2025-07-30",
      numberOfDaysDue: "32",
      totalExpected: "₦35,000",
      balanceOutstanding: "₦350,000",
      principalInArrears: "₦15,000",
      interestInArrears: "₦3,000",
      acctNumber: "ACC005",
      balInSavingAccts: "₦8,000",
      status: "Delinquent",
      amountToPay: "₦18,000",
      percentOnSavingAccts: "1.8%",
      guarantorName: "Hassan Ahmed",
      guarantorTelNo: "+234 709 012 3456",
      guarantorHomeAddress: "25 Kano Road, Festac, Lagos",
      guarantorBusinessAddress: "5 Festac Link Road, Lagos",
      groupId: "GRP005",
      groupName: "Festac Fashion Group",
      branch: "Festac Town Branch",
    },
    {
      contractNo: "CON006",
      cifNo: "CIF006",
      cefNo: "CEF006",
      customerName: "Oluwafemi Adekunle",
      sector: "Agriculture",
      cifLoanOfficer: "Peter Obi",
      loanCycle: "4",
      amountDisbursed: "₦2,000,000",
      disbursedDate: "2023-01-25",
      telephone: "+234 802 345 6789",
      installmentNumber: "31",
      loanType: "Business Loan",
      term: "36 months",
      lastDateOfPayment: "2025-08-20",
      numberOfDaysDue: "11",
      totalExpected: "₦60,000",
      balanceOutstanding: "₦900,000",
      principalInArrears: "₦25,000",
      interestInArrears: "₦5,000",
      acctNumber: "ACC006",
      balInSavingAccts: "₦50,000",
      status: "Delinquent",
      amountToPay: "₦30,000",
      percentOnSavingAccts: "2%",
      guarantorName: "Chioma Nwosu",
      guarantorTelNo: "+234 805 678 9012",
      guarantorHomeAddress: "3 Aba Road, Port Harcourt, Rivers",
      guarantorBusinessAddress: "11 Trans Amadi Layout, Port Harcourt",
      groupId: "GRP006",
      groupName: "Rivers Farmers Co-op",
      branch: "Port Harcourt Branch",
    },
    {
      contractNo: "CON007",
      cifNo: "CIF007",
      cefNo: "CEF007",
      customerName: "Nkechi Eze",
      sector: "Technology",
      cifLoanOfficer: "Cynthia Okeke",
      loanCycle: "1",
      amountDisbursed: "₦350,000",
      disbursedDate: "2024-09-01",
      telephone: "+234 811 234 5678",
      installmentNumber: "9",
      loanType: "Personal Loan",
      term: "12 months",
      lastDateOfPayment: "2025-08-01",
      numberOfDaysDue: "30",
      totalExpected: "₦30,000",
      balanceOutstanding: "₦280,000",
      principalInArrears: "₦10,000",
      interestInArrears: "₦2,000",
      acctNumber: "ACC007",
      balInSavingAccts: "₦12,000",
      status: "Delinquent",
      amountToPay: "₦12,000",
      percentOnSavingAccts: "1.5%",
      guarantorName: "Adaeze Okorie",
      guarantorTelNo: "+234 812 345 6789",
      guarantorHomeAddress: "8 Umuahia Street, Abuja, FCT",
      guarantorBusinessAddress: "2 Wuse Market, Abuja",
      groupId: "GRP007",
      groupName: "Abuja Tech Hub",
      branch: "Wuse 2 Branch",
    },
    {
      contractNo: "CON008",
      cifNo: "CIF008",
      cefNo: "CEF008",
      customerName: "Ifeanyi Obi",
      sector: "Retail",
      cifLoanOfficer: "Tosin Adebayo",
      loanCycle: "5",
      amountDisbursed: "₦1,000,000",
      disbursedDate: "2022-04-18",
      telephone: "+234 908 765 4321",
      installmentNumber: "38",
      loanType: "Micro Loan",
      term: "48 months",
      lastDateOfPayment: "2025-07-25",
      numberOfDaysDue: "37",
      totalExpected: "₦25,000",
      balanceOutstanding: "₦250,000",
      principalInArrears: "₦15,000",
      interestInArrears: "₦3,000",
      acctNumber: "ACC008",
      balInSavingAccts: "₦30,000",
      status: "Delinquent",
      amountToPay: "₦18,000",
      percentOnSavingAccts: "1.2%",
      guarantorName: "Kunle Lawal",
      guarantorTelNo: "+234 909 876 5432",
      guarantorHomeAddress: "15 Oba Market Road, Ibadan, Oyo",
      guarantorBusinessAddress: "20 Ring Road, Ibadan",
      groupId: "GRP008",
      groupName: "Ibadan Traders",
      branch: "Ibadan Branch",
    },
    {
      contractNo: "CON009",
      cifNo: "CIF009",
      cefNo: "CEF009",
      customerName: "Amina Bello",
      sector: "Education",
      cifLoanOfficer: "Sarah Kalu",
      loanCycle: "1",
      amountDisbursed: "₦150,000",
      disbursedDate: "2025-02-01",
      telephone: "+234 807 654 3210",
      installmentNumber: "7",
      loanType: "Personal Loan",
      term: "12 months",
      lastDateOfPayment: "2025-08-05",
      numberOfDaysDue: "26",
      totalExpected: "₦15,000",
      balanceOutstanding: "₦140,000",
      principalInArrears: "₦8,000",
      interestInArrears: "₦1,500",
      acctNumber: "ACC009",
      balInSavingAccts: "₦3,000",
      status: "Delinquent",
      amountToPay: "₦9,500",
      percentOnSavingAccts: "1.5%",
      guarantorName: "Zainab Abubakar",
      guarantorTelNo: "+234 808 765 4321",
      guarantorHomeAddress: "4 Kaduna Street, Gombe, Gombe",
      guarantorBusinessAddress: "7 Gombe Main Market, Gombe",
      groupId: "GRP009",
      groupName: "Gombe Tutors",
      branch: "Gombe Branch",
    },
    {
      contractNo: "CON010",
      cifNo: "CIF010",
      cefNo: "CEF010",
      customerName: "Segun Oluwole",
      sector: "Transport",
      cifLoanOfficer: "Alice Smith",
      loanCycle: "2",
      amountDisbursed: "₦800,000",
      disbursedDate: "2024-10-20",
      telephone: "+234 806 123 4567",
      installmentNumber: "10",
      loanType: "Business Loan",
      term: "18 months",
      lastDateOfPayment: "2025-08-28",
      numberOfDaysDue: "3",
      totalExpected: "₦45,000",
      balanceOutstanding: "₦650,000",
      principalInArrears: "₦5,000",
      interestInArrears: "₦1,000",
      acctNumber: "ACC010",
      balInSavingAccts: "₦15,000",
      status: "Delinquent",
      amountToPay: "₦6,000",
      percentOnSavingAccts: "1.6%",
      guarantorName: "David Lee",
      guarantorTelNo: "+234 804 111 2222",
      guarantorHomeAddress: "22 Ogunlana Drive, Surulere, Lagos",
      guarantorBusinessAddress: "35 Ikorodu Road, Lagos",
      groupId: "GRP010",
      groupName: "Lagos Logistics",
      branch: "Ikorodu Branch",
    },
  ]);

  const parseAmount = (str) => parseFloat(str.replace(/[^0-9.-]+/g, "")) || 0;

  const filteredDelinquencies = delinquencies
    .filter(
      (d) =>
        d.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.contractNo.includes(searchTerm) ||
        d.cifNo?.includes(searchTerm)
    )
    .filter((d) => {
      if (amountFilter === "All Amounts") return true;
      const amount = parseAmount(d.amountDisbursed);
      if (amountFilter === "Up to ₦500,000") return amount <= 500000;
      if (amountFilter === "Up to ₦1,000,000") return amount <= 1000000;
      if (amountFilter === "Above ₦1,000,000") return amount > 1000000;
      return true;
    })
    .filter((d) => {
      if (daysDueFilter === "All Days Due") return true;
      const days = parseInt(d.numberOfDaysDue);
      if (daysDueFilter === "1-15 Days") return days <= 15;
      if (daysDueFilter === "16-30 Days") return days > 15 && days <= 30;
      if (daysDueFilter === "Over 30 Days") return days > 30;
      return true;
    });

  const handleExportClick = () => setExportDropdown(!exportDropdown);
  const handleExportOption = (format) => {
    const worksheet = XLSX.utils.json_to_sheet(filteredDelinquencies);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Delinquencies");
    const buf = XLSX.write(workbook, {
      bookType: format === "Excel" ? "xlsx" : format.toLowerCase(),
      type: "buffer",
    });
    const blob = new Blob([buf], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Delinquencies_${format.toLowerCase()}.${
      format.toLowerCase() === "excel" ? "xlsx" : format.toLowerCase()
    }`; // Fixed to .xlsx for Excel
    link.click();
    window.URL.revokeObjectURL(url);
    setExportDropdown(false);
  };

  return (
    <div className="delinquency-section-container">
      {/* The mobile menu toggle */}
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
          <li onClick={handleCtrComplianceClick} style={{ cursoe: "pointer" }}>
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
          <h1>Delinquency Report</h1>
          <p>Monitor and manage overdue loan accounts</p>
        </div>

        <div className="controls-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, contract, or CIF..."
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
              <option value="Above ₦1,000,000"> Above ₦1,000,000</option>
            </select>

            <select
              value={daysDueFilter}
              onChange={(e) => setDaysDueFilter(e.target.value)}
            >
              <option value="All Days Due">All Days Due</option>
              <option value="1-15 Days">1–15 Days</option>
              <option value="16-30 Days">16–30 Days</option>
              <option value="Over 30 Days">Over 30 Days</option>
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
          <table className="delinquency-table">
            <thead>
              <tr>
                <th>Contract No.</th>
                <th>Customer Name</th>
                <th>Disbursed</th>
                <th>Outstanding</th>
                <th>Days Due</th>
                <th>Arrears</th>
                <th>Status</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>
              {filteredDelinquencies.map((d, i) => (
                <tr key={i}>
                  <td>
                    <code>{d.contractNo}</code>
                  </td>
                  <td>
                    <strong>{d.customerName}</strong>
                  </td>
                  <td className="amount">{d.amountDisbursed}</td>
                  <td className="amount">{d.balanceOutstanding}</td>
                  <td className="days-due">{d.numberOfDaysDue} days</td>
                  <td className="arrears">
                    ₦
                    {parseAmount(d.principalInArrears) +
                      parseAmount(d.interestInArrears)}
                  </td>
                  <td>
                    <span className="status-tag delinquent">{d.status}</span>
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

export default DelinquencySection;
