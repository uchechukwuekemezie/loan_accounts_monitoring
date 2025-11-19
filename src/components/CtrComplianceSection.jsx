import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import logo1 from "../assets/accion-logo-svg-orange.svg";
import "../styles/CtrComplianceSection.css";
import { FaCalendarAlt, FaFile, FaSearch } from "react-icons/fa";

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

  const filteredCtrData = ctrData.filter(
    (data) =>
      (data.idNumber.includes(searchTerm) ||
        data.ultimateBeneficialOwners
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) &&
      (dnfbpCategoryFilter === "All Categories" ||
        data.dnfbpCategory === dnfbpCategoryFilter)
  );

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

  const uniqueDnfbpCategories = [
    "All Categories",
    ...new Set(ctrData.map((data) => data.dnfbpCategory)),
  ];

  return (
    <div className="ctr-compliance-section-container">
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

      <div className="ctr-compliance-section-white-div">
        <div className="ctr-compliance-section-content">
          <div className="ctr-compliance-report-header">
            <div className="ctr-compliance-report-title">
              <h2>CTR Compliance Report</h2>
            </div>
            {/* <div className="ctr-compliance-time-buttons">
              <button>Day</button>
              <button>Week</button>
              <button>Month</button>
              <button>Year</button>
              <button>All Time</button>
              <button>
                <FaCalendarAlt /> Custom Date
              </button>
            </div> */}
            <div className="ctr-compliance-export-button">
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
          <div className="ctr-compliance-table-controls">
            <div className="ctr-compliance-search-bar">
              <input
                type="text"
                placeholder="Search ID number or beneficial owners"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="search-icon" />
            </div>
            <div className="ctr-compliance-filter-spacer" />
            <select
              value={dnfbpCategoryFilter}
              onChange={(e) => setDnfbpCategoryFilter(e.target.value)}
              className="ctr-compliance-dnfbp-filter"
            >
              {uniqueDnfbpCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="ctr-compliance-table-section">
            <table className="ctr-compliance-table">
              <thead>
                <tr>
                  <th>ID Number (Passport, NIN, BVN, Voter's Card)</th>
                  <th>ID Issuance Date</th>
                  <th>Source of Wealth</th>
                  <th>Ultimate Beneficial Owners (for corporate accounts)</th>
                  <th>Tax Identification Number (TIN)</th>
                  <th>RC Number</th>
                  <th>Signatories and their BVNs</th>
                  <th>DNFBP Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredCtrData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.idNumber}</td>
                    <td>{data.idIssuanceDate}</td>
                    <td>{data.sourceOfWealth}</td>
                    <td>{data.ultimateBeneficialOwners}</td>
                    <td>{data.taxIdentificationNumber}</td>
                    <td>{data.rcNumber}</td>
                    <td>{data.signatoriesAndBvns}</td>
                    <td>{data.dnfbpCategory}</td>
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

export default CtrComplianceSection;
