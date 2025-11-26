import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import "../styles/AdminManagement.css";
import logo2 from "../assets/Picture1.png";
import {
  FaUser,
  FaPlus,
  FaTimes,
  FaSearch,
  FaBars,
  FaCheck,
} from "react-icons/fa";

const AdminManagement = () => {
  // the links for navigation
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
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    dept: "",
  });

  const [adminData, setAdminData] = useState([
    {
      userId: "#28373",
      userName: "Kristin Watson",
      role: "Super Admin",
      department: "IT Security Management",
      status: "Active",
    },
    {
      userId: "#32876",
      userName: "Guy Hawkins",
      role: "Admin",
      department: "Digital",
      status: "Inactive",
    },
    {
      userId: "#11394",
      userName: "Theresa Webb",
      role: "Admin",
      department: "Risk Management",
      status: "Inactive",
    },
    {
      userId: "#99822",
      userName: "Floyd Miles",
      role: "Admin",
      department: "Audit",
      status: "Active",
    },
    {
      userId: "#11873",
      userName: "Cody Fisher",
      role: "Admin",
      department: "Internal Control",
      status: "Inactive",
    },
  ]);

  const departments = [
    "Information Security Deartment",
    "Digital",
    "Risk Mnagement",
    "Audit",
    "Internal Control",
  ];

  // to create an admin user
  const handleCreateAdmin = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.dept) return;

    const newAdmin = {
      userId: `#${Date.now().toString().slice(-5)}`,
      userName: form.name.trim(),
      role: "Admin",
      department: form.dept,
      status: "Active",
    };

    setAdminData((prev) => [...prev, newAdmin]);
    setForm({ name: "", email: "", dept: "" });
    setSidebarOpen(false);
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };

  const filteredData = adminData
    .filter((a) => {
      const term = searchTerm.toLowerCase();
      return a.userName.toLowerCase().includes(term) || a.userId.includes(term);
    })
    .filter(
      (a) =>
        departmentFilter === "All Departments" ||
        a.department === departmentFilter
    );

  return (
    <div className="admin-container">
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
          src={logo2}
          alt="Accion Logo"
          className="sidebar-logo"
          onClick={handleDashboardClick}
          style={{ cursor: "ponter" }}
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
          <h1>Admin Management</h1>
          <p>Manage system users and access permissions</p>
        </div>

        {/* The stat cards */}
        <div className="stat-cards">
          <div className="stat-card super-admin">
            <FaUser className="icon" />
            <div>
              <h3>
                {adminData.filter((a) => a.role === "Super Admin").length}
              </h3>
              <p>Super Admins</p>
            </div>
          </div>
          <div className="stat-card regular-admin">
            <FaUser className="icon" />
            <div>
              <h3>{adminData.filter((a) => a.role === "Admin").length}</h3>
              <p>Regular Admins</p>
            </div>
          </div>
          <div
            className="stat-card add-new"
            onClick={() => setSidebarOpen(true)}
          >
            <FaPlus className="icon" />
            <h3>Add New Admin</h3>
          </div>
        </div>

        {/* The table section */}
        <div className="table-section">
          <div className="table-header">
            <h2>Admin Users</h2>
            <div className="controls">
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search user or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                <option value="All Departments">All Departments</option>
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>User Name</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((admin, i) => (
                  <tr key={i}>
                    <td>
                      <code>{admin.userId}</code>
                    </td>
                    <td>
                      <strong>{admin.userName}</strong>
                    </td>
                    <td>
                      <span
                        className={`role-tag ${admin.role
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {admin.role}
                      </span>
                    </td>
                    <td>{admin.department}</td>
                    <td>
                      <span className={`status ${admin.status.toLowerCase()}`}>
                        {admin.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* The right sidebar form */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}>
          <div className="sidebar-form" onClick={(e) => e.stopPropagation()}>
            <div className="form-header">
              <h3>Add New Admin</h3>
              <button onClick={() => setSidebarOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <p>Fill in the details to create a new admin account</p>
            <form onSubmit={handleCreateAdmin}>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <select
                value={form.dept}
                onChange={(e) => setForm({ ...form, dept: e.target.value })}
                required
              >
                <option value="">Select Department</option>
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <button type="submit" className="submit-btn">
                Create Admin Account
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div className="toast-overlay">
          <div className="toast">
            <div className="toast-icon">
              <FaCheck />
            </div>
            <h4>Admin Created Successfully!</h4>
            <p>Login credentials have been sent to their email.</p>
            <button onClick={() => setToast(false)}>Okay</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminManagement;
