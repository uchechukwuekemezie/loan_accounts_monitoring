import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import "../styles/AccountSection.css";
import logo1 from "../assets/Picture1.png";
import {
  FaSearch,
  FaFile,
  FaFileExport,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const AccountSection = () => {
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
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [kycFilter, setKycFilter] = useState("All Tiers");
  const [exportDropdown, setExportDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // sample data
  const [accounts, setAccounts] = useState([
    {
      accountNo: "0123456789",
      r05AccountNo: "0123456789",
      customerName: "John Doe",
      accountOfficer: "Alice Smith",
      collectionOfficer: "Bob Johnson",
      address: "123 Main St",
      gender: "Male",
      category: "Savings",
      currency: "NGN",
      onlineBalance: "₦1,000",
      openActualBalance: "₦1,000",
      phoneNumber: "08012345678",
      openDate: "2025-01-15",
      customerNo: "356103",
      age: 30,
      introducerCIF: "INT001",
      introducerName: "Jane Doe",
      businessAddress: "456 Business Rd",
      kycTier: "Tier 1",
      bvn: "12345678901",
      locationOfAccountOpen: "Lagos",
      nameOfAssociation: "Assoc A",
      businessCity: "Lagos",
      businessState: "Lagos",
      branch: "Anthony",
      nubanAccountNo: "1234567890",
      signature: "Yes",
      passport: "Yes",
      email: "john.doe@example.com",
      dob: "1995-05-10",
      status: "Active",
    },
    {
      accountNo: "0111111112",
      r05AccountNo: "0123456789",
      customerName: "Jane Doe",
      accountOfficer: "Alice Bush",
      collectionOfficer: "Bob Johnson",
      address: "123 Main St",
      gender: "Male",
      category: "Savings",
      currency: "NGN",
      onlineBalance: "₦1,000",
      openActualBalance: "₦1,000",
      phoneNumber: "08012345678",
      openDate: "2025-01-15",
      customerNo: "356103",
      age: 30,
      introducerCIF: "INT001",
      introducerName: "Jane Doe",
      businessAddress: "456 Business Rd",
      kycTier: "Tier 1",
      bvn: "12345678901",
      locationOfAccountOpen: "Lagos",
      nameOfAssociation: "Assoc A",
      businessCity: "Lagos",
      businessState: "Lagos",
      branch: "Anthony",
      nubanAccountNo: "1234567890",
      signature: "Yes",
      passport: "Yes",
      email: "john.doe@example.com",
      dob: "1995-05-10",
      status: "Active",
    },
    {
      accountNo: "0112233445",
      r05AccountNo: "0198765432",
      customerName: "Tunde Adewale",
      accountOfficer: "Bola Adeyemi",
      collectionOfficer: "Segun Olaniyan",
      address: "5 Ojo Street, Ikeja",
      gender: "Male",
      category: "Current",
      currency: "NGN",
      onlineBalance: "₦55,000",
      openActualBalance: "₦55,000",
      phoneNumber: "09056781234",
      openDate: "2024-03-20",
      customerNo: "890123",
      age: 45,
      introducerCIF: "INT002",
      introducerName: "Funke Williams",
      businessAddress: "10 Lagos-Abeokuta Expressway",
      kycTier: "Tier 2",
      bvn: "23456789012",
      locationOfAccountOpen: "Ikeja",
      nameOfAssociation: "Traders Union",
      businessCity: "Ikeja",
      businessState: "Lagos",
      branch: "Ikeja Main",
      nubanAccountNo: "9876543210",
      signature: "Yes",
      passport: "Yes",
      email: "tunde.adewale@example.com",
      dob: "1980-11-25",
      status: "Active",
    },
    {
      accountNo: "0113344556",
      r05AccountNo: "0155667788",
      customerName: "Chiamaka Okoro",
      accountOfficer: "Ngozi Emeka",
      collectionOfficer: "Kunle Adebayo",
      address: "7 Enugu Road, Surulere",
      gender: "Female",
      category: "Savings",
      currency: "NGN",
      onlineBalance: "₦15,500",
      openActualBalance: "₦15,500",
      phoneNumber: "08167890123",
      openDate: "2023-08-10",
      customerNo: "567890",
      age: 28,
      introducerCIF: "INT003",
      introducerName: "Uche Nwachukwu",
      businessAddress: "12 Surulere Market",
      kycTier: "Tier 1",
      bvn: "34567890123",
      locationOfAccountOpen: "Surulere",
      nameOfAssociation: "Market Women Group",
      businessCity: "Surulere",
      businessState: "Lagos",
      branch: "Surulere",
      nubanAccountNo: "2109876543",
      signature: "Yes",
      passport: "No",
      email: "chiamaka.okoro@example.com",
      dob: "1997-02-18",
      status: "Active",
    },
    {
      accountNo: "0114455667",
      r05AccountNo: "0133445566",
      customerName: "Usman Ibrahim",
      accountOfficer: "Femi Johnson",
      collectionOfficer: "Aisha Yusuf",
      address: "9 Sokoto Street, Victoria Island",
      gender: "Male",
      category: "Current",
      currency: "NGN",
      onlineBalance: "₦250,000",
      openActualBalance: "₦250,000",
      phoneNumber: "08034567890",
      openDate: "2022-11-05",
      customerNo: "123456",
      age: 52,
      introducerCIF: "INT004",
      introducerName: "Mohammed Bello",
      businessAddress: "15 Adeola Odeku, VI",
      kycTier: "Tier 3",
      bvn: "45678901234",
      locationOfAccountOpen: "Victoria Island",
      nameOfAssociation: "Petroleum Dealers Association",
      businessCity: "Victoria Island",
      businessState: "Lagos",
      branch: "Victoria Island",
      nubanAccountNo: "3210987654",
      signature: "Yes",
      passport: "Yes",
      email: "usman.ibrahim@example.com",
      dob: "1973-09-01",
      status: "Active",
    },
    {
      accountNo: "0115566778",
      r05AccountNo: "0177889900",
      customerName: "Fatima Musa",
      accountOfficer: "Grace Obasi",
      collectionOfficer: "David Eze",
      address: "25 Kano Road, Festac",
      gender: "Female",
      category: "Savings",
      currency: "NGN",
      onlineBalance: "₦7,500",
      openActualBalance: "₦7,500",
      phoneNumber: "07089012345",
      openDate: "2024-06-12",
      customerNo: "987654",
      age: 35,
      introducerCIF: "INT005",
      introducerName: "Hassan Ahmed",
      businessAddress: "5 Festac Link Road",
      kycTier: "Tier 1",
      bvn: "56789012345",
      locationOfAccountOpen: "Festac",
      nameOfAssociation: "Festac Traders",
      businessCity: "Festac",
      businessState: "Lagos",
      branch: "Festac Town",
      nubanAccountNo: "4321098765",
      signature: "Yes",
      passport: "No",
      email: "fatima.musa@example.com",
      dob: "1990-04-30",
      status: "Active",
    },
    {
      accountNo: "0116677889",
      r05AccountNo: "0144556677",
      customerName: "Oluwafemi Adekunle",
      accountOfficer: "Peter Obi",
      collectionOfficer: "Helen Ojo",
      address: "3 Aba Road, Port Harcourt",
      gender: "Male",
      category: "Current",
      currency: "NGN",
      onlineBalance: "₦180,000",
      openActualBalance: "₦180,000",
      phoneNumber: "08023456789",
      openDate: "2023-01-25",
      customerNo: "234567",
      age: 41,
      introducerCIF: "INT006",
      introducerName: "Chioma Nwosu",
      businessAddress: "11 Trans Amadi Layout, PH",
      kycTier: "Tier 2",
      bvn: "67890123456",
      locationOfAccountOpen: "Port Harcourt",
      nameOfAssociation: "Rivers Business Forum",
      businessCity: "Port Harcourt",
      businessState: "Rivers",
      branch: "Trans Amadi",
      nubanAccountNo: "5432109876",
      signature: "Yes",
      passport: "Yes",
      email: "femi.adek@example.com",
      dob: "1984-07-15",
      status: "Active",
    },
    {
      accountNo: "0117788990",
      r05AccountNo: "0166778899",
      customerName: "Nkechi Eze",
      accountOfficer: "Cynthia Okeke",
      collectionOfficer: "Emeka Ibe",
      address: "8 Umuahia Street, Abuja",
      gender: "Female",
      category: "Savings",
      currency: "NGN",
      onlineBalance: "₦9,200",
      openActualBalance: "₦9,200",
      phoneNumber: "08112345678",
      openDate: "2024-09-01",
      customerNo: "345678",
      age: 25,
      introducerCIF: "INT007",
      introducerName: "Adaeze Okorie",
      businessAddress: "2 Wuse Market, Abuja",
      kycTier: "Tier 1",
      bvn: "78901234567",
      locationOfAccountOpen: "Abuja",
      nameOfAssociation: "FCT Traders",
      businessCity: "Abuja",
      businessState: "FCT",
      branch: "Wuse 2",
      nubanAccountNo: "6543210987",
      signature: "Yes",
      passport: "Yes",
      email: "nkechi.eze@example.com",
      dob: "2000-03-22",
      status: "Active",
    },
    {
      accountNo: "0118899001",
      r05AccountNo: "0188990011",
      customerName: "Ifeanyi Obi",
      accountOfficer: "Tosin Adebayo",
      collectionOfficer: "Bisi Oladipo",
      address: "15 Oba Market Road, Ibadan",
      gender: "Male",
      category: "Current",
      currency: "NGN",
      onlineBalance: "₦320,000",
      openActualBalance: "₦320,000",
      phoneNumber: "09087654321",
      openDate: "2022-04-18",
      customerNo: "456789",
      age: 55,
      introducerCIF: "INT008",
      introducerName: "Kunle Lawal",
      businessAddress: "20 Ring Road, Ibadan",
      kycTier: "Tier 3",
      bvn: "89012345678",
      locationOfAccountOpen: "Ibadan",
      nameOfAssociation: "Oyo Business Group",
      businessCity: "Ibadan",
      businessState: "Oyo",
      branch: "Dugbe",
      nubanAccountNo: "7654321098",
      signature: "Yes",
      passport: "Yes",
      email: "ifeanyi.obi@example.com",
      dob: "1970-01-05",
      status: "Active",
    },
    {
      accountNo: "0119900112",
      r05AccountNo: "0199001122",
      customerName: "Amina Bello",
      accountOfficer: "Sarah Kalu",
      collectionOfficer: "Musa Audu",
      address: "4 Kaduna Street, Gombe",
      gender: "Female",
      category: "Savings",
      currency: "NGN",
      onlineBalance: "₦2,500",
      openActualBalance: "₦2,500",
      phoneNumber: "08076543210",
      openDate: "2025-02-01",
      customerNo: "678901",
      age: 22,
      introducerCIF: "INT009",
      introducerName: "Zainab Abubakar",
      businessAddress: "7 Gombe Main Market",
      kycTier: "Tier 1",
      bvn: "90123456789",
      locationOfAccountOpen: "Gombe",
      nameOfAssociation: "Gombe Traders Union",
      businessCity: "Gombe",
      businessState: "Gombe",
      branch: "Gombe Main",
      nubanAccountNo: "8765432109",
      signature: "Yes",
      passport: "No",
      email: "amina.bello@example.com",
      dob: "2003-11-12",
      status: "Active",
    },
  ]);

  // filter accounts based on input
  const filteredAccounts = accounts
    .filter(
      (acc) =>
        acc.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acc.accountNo.includes(searchTerm) ||
        acc.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((acc) =>
      categoryFilter === "All Categories"
        ? true
        : acc.category === categoryFilter
    )
    .filter((acc) =>
      kycFilter === "All Tiers" ? true : acc.kycTier === kycFilter
    );

  // data exporting
  const handleExportClick = () => setExportDropdown(!exportDropdown);
  const handleExportOption = (format) => {
    const worksheet = XLSX.utils.json_to_sheet(filteredAccounts);
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
    <div className="account-section-container">
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

      {/* The main content */}
      <div className="main-content">
        <div className="page-header">
          <h1>Accounts Report</h1>
          <p>View and manage all customer accounts</p>
        </div>

        <div className="controls-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search name, account or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filters">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All Categories">All Categories</option>
              <option>Savings</option>
              <option>Current</option>
              <option>Fixed</option>
            </select>

            <select
              value={kycFilter}
              onChange={(e) => setKycFilter(e.target.value)}
            >
              <option value="All Tiers">All KYC Tiers</option>
              <option>Tier 1</option>
              <option>Tier 2</option>
              <option>Tier 3</option>
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
          <table className="accounts-table">
            <thead>
              <tr>
                <th>CIF</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Account Number</th>
                <th>Account Officer</th>
                <th>Category</th>
                <th>KYC Tier</th>
                <th>Branch</th>
              </tr>
            </thead>
            <tbody>
              {filteredAccounts.map((acc, i) => (
                <tr key={i}>
                  <td>{acc.customerNo}</td>
                  <td>
                    <strong>{acc.customerName}</strong>
                  </td>
                  <td>{acc.email}</td>
                  <td>
                    <code>{acc.accountNo}</code>
                  </td>
                  <td>{acc.accountOfficer}</td>
                  <td>
                    <span className={`tag ${acc.category.toLowerCase()}`}>
                      {acc.category}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`tier tier-${
                        acc.kycTier.split(" ")[1] || "1"
                      }`}
                    >
                      {acc.kycTier}
                    </span>
                  </td>
                  <td>{acc.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
