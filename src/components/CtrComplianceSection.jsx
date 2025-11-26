import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import logo1 from "../assets/Picture1.png";
import "../styles/CtrComplianceSection.css";
import { FaFileExport, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const CtrComplianceSection = () => {
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
  const [dnfbpCategoryFilter, setDnfbpCategoryFilter] =
    useState("All Categories");
  const [exportDropdown, setExportDropdown] = useState(false);

  const [ctrData, setCtrData] = useState([
    {
      idNumber: "NIN-12345678901",
      idIssuanceDate: "2020-05-10",
      sourceOfWealth: "Business Income",
      ultimateBeneficialOwners: "John Doe, Jane Doe",
      taxIdentificationNumber: "TIN-987654321",
      rcNumber: "RC-456789",
      signatoriesAndBvns:
        "Alice Smith (BVN-12345678901), Bob Jones (BVN-9876543210)",
      dnfbpCategory: "Hoteliers",
    },
    {
      idNumber: "BVN-9876543210",
      idIssuanceDate: "2019-11-15",
      sourceOfWealth: "Real Estate",
      ultimateBeneficialOwners: "Tunde Adewale",
      taxIdentificationNumber: "TIN-123456789",
      rcNumber: "RC-123456",
      signatoriesAndBvns: "Tunde Adewale (BVN-9876543210)",
      dnfbpCategory: "Real Estate Agents",
    },
    {
      idNumber: "Passport-A1234567",
      idIssuanceDate: "2021-03-20",
      sourceOfWealth: "Investment Returns",
      ultimateBeneficialOwners: "Chiamaka Okoro, Ngozi Emeka",
      taxIdentificationNumber: "TIN-456789123",
      rcNumber: "RC-789123",
      signatoriesAndBvns: "Chiamaka Okoro (BVN-1112233344)",
      dnfbpCategory: "Hoteliers",
    },
    {
      idNumber: "Voter-76543210",
      idIssuanceDate: "2018-09-01",
      sourceOfWealth: "Salary",
      ultimateBeneficialOwners: "Usman Ibrahim",
      taxIdentificationNumber: "TIN-321654987",
      rcNumber: "RC-321654",
      signatoriesAndBvns: "Usman Ibrahim (BVN-5556677889)",
      dnfbpCategory: "Legal Practitioners",
    },
    {
      idNumber: "NIN-11122233344",
      idIssuanceDate: "2022-07-15",
      sourceOfWealth: "Business Income",
      ultimateBeneficialOwners: "Fatima Musa",
      taxIdentificationNumber: "TIN-789123456",
      rcNumber: "RC-654321",
      signatoriesAndBvns: "Fatima Musa (BVN-9998877665)",
      dnfbpCategory: "Real Estate Agents",
    },
  ]);

  const filteredCtrData = ctrData
    .filter((d) => {
      const term = searchTerm.toLowerCase();
      return (
        d.idNumber.toLowerCase().includes(term) ||
        d.ultimateBeneficialOwners.toLowerCase().includes(term) ||
        d.signatoriesAndBvns.toLowerCase().includes(term)
      );
    })
    .filter(
      (d) =>
        dnfbpCategoryFilter === "All Categories" ||
        d.dnfbpCategory === dnfbpCategoryFilter
    );

  const uniqueDnfbpCategories = [
    "All Categories",
    ...new Set(ctrData.map((d) => d.dnfbpCategory)),
  ];

  const handleExportClick = () => setExportDropdown(!exportDropdown);
  const handleExportOption = (format) => {
    const worksheet = XLSX.utils.json_to_sheet(filteredCtrData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "CTRCompliance");
    const buf = XLSX.write(workbook, {
      bookType: format === "Excel" ? "xlsx" : format.toLowerCase(),
      type: "buffer",
    });
    const blob = new Blob([buf], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `CTRCompliance_${format.toLowerCase()}.${
      format.toLowerCase() === "excel" ? "xlsx" : format.toLowerCase()
    }`; // Fixed to .xlsx for Excel
    link.click();
    window.URL.revokeObjectURL(url);
    setExportDropdown(false);
  };

  return (
    <div className="ctr-container">
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
          <h1>CTR Compliance Report</h1>
          <p>
            Designated Non-financial Business and Professions (DNFBPs)
            compliance monitoring
          </p>
        </div>

        <div className="controls-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by ID, name, or BVN..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filters">
            <select
              value={dnfbpCategoryFilter}
              onChange={(e) => setDnfbpCategoryFilter(e.target.value)}
            >
              {uniqueDnfbpCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
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
          <table className="ctr-table">
            <thead>
              <tr>
                <th>ID Number</th>
                <th>Issuance Date</th>
                <th>Source of Wealth</th>
                <th>Beneficial Owners</th>
                <th>TIN</th>
                <th>RC Number</th>
                <th>Signatories & BVNs</th>
                <th>DNFBP Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredCtrData.map((d, i) => (
                <tr key={i}>
                  <td>
                    <code>{d.idNumber}</code>
                  </td>
                  <td>{d.idIssuanceDate}</td>
                  <td>{d.sourceOfWealth}</td>
                  <td>
                    <strong>{d.ultimateBeneficialOwners}</strong>
                  </td>
                  <td>
                    <code>{d.taxIdentificationNumber}</code>
                  </td>
                  <td>
                    <code>{d.rcNumber}</code>
                  </td>
                  <td className="signatories">{d.signatoriesAndBvns}</td>
                  <td>
                    <span
                      className={`category-tag ${d.dnfbpCategory
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {d.dnfbpCategory}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CtrComplianceSection;
