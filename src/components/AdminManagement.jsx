import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import "../styles/AdminManagement.css";
import logo2 from "../assets/accion-logo-svg-orange.svg";
import { FaUser, FaPlus, FaTimes, FaSearch } from "react-icons/fa";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");

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

  // The right sidebar and form
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    dept: "",
  });
  const [toast, setToast] = useState(false);

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
    if (!form.name || !form.email || !form.dept) return;

    const newAdmin = {
      userId: `#${Date.now().toString().slice(-5)}`,
      userName: form.name,
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

  const filteredData = adminData.filter(
    (admin) =>
      (admin.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        admin.userId.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (departmentFilter === "All Departments" ||
        admin.department === departmentFilter)
  );

  return (
    <div className="admin-management-container">
      <div className="sidebar">
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

      <div className="admin-management-white-div">
        <div className="admin-management-content">
          {/* The three box cards */}
          <div className="admin-stat-boxes">
            <div className="admin-stat-box">
              <FaUser className="admin-icon" />
              <p>4 users</p>
              <h3>Super Admin</h3>
            </div>
            <div className="admin-stat-box">
              <FaUser className="admin-icon" />
              <p>7 users</p>
              <h3>Admin</h3>
            </div>
            <div
              className="admin-stat-box add-new"
              onClick={() => setSidebarOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <FaPlus className="admin-icon" />
              <h3>Add New Admin</h3>
            </div>
          </div>

          {/* The tables section */}
          <div className="admin-table-section">
            <div className="admin-table-header">
              <h2>Admin users</h2>
              <div className="admin-table-control">
                <div className="admin-search-bar">
                  <input
                    type="text"
                    placeholder="Search for user"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="search-icon" />
                </div>
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="admin-department-filter"
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
            <table className="admin-users-table">
              <thead>
                <tr>
                  <th>USER ID</th>
                  <th>USER NAME</th>
                  <th>ASSIGNED ROLE</th>
                  <th>DEPARTMENT</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((admin, index) => (
                  <tr key={index}>
                    <td>{admin.userId}</td>
                    <td>{admin.userName}</td>
                    <td>{admin.role}</td>
                    <td>{admin.department}</td>
                    <td>
                      <span
                        className={
                          admin.status === "Active"
                            ? "status-active"
                            : "status-inactive"
                        }
                      >
                        *{admin.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* The right sidebar */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}>
          <div className="sidebar-right" onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-header">
              <h3>Add New Admin</h3>
              <button
                onClick={() => setSidebarOpen(false)}
                className="close-btn"
              >
                <FaTimes />
              </button>
            </div>
            <p>Please provide user details below</p>
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
              <button type="submit" className="create-admin-btn">
                Create Admin
              </button>
            </form>
          </div>
        </div>
      )}

      {/* The toast notification */}
      {toast && (
        <div className="toast-overlay">
          <div className="toast">
            <div className="toast-check">Check</div>
            <h4>Admin Added Successfully</h4>
            <p>
              A new admin has been created and their login credentials have been
              sent to their official email
            </p>
            <button onClick={() => setToast(false)} className="toast-ok">
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminManagement;
