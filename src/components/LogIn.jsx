import React, { useState } from "react";
import "../styles/LogIn.css";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/Picture1.png";

const LogIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // the logic for login with a valid email. logic for zoho mail to be added later
    if (validateEmail(credentials.email)) {
      console.log("Login attempted by:", credentials);
      setError("");
      // navigate to otp verification page with the email as state
      navigate("/VerifyOtp.jsx", { state: { email: credentials.email } });
    } else {
      setError("Please enter a valid email address.");
    }
  };

  const handleForgotPassword = () => {
    navigate("/ForgotPassword.jsx");
  };

  return (
    <div className="login-container">
      <div className="login-purple-div">
        <div className="login-purple-content">
          <h1>Loan Accounts Monitoring</h1>
          <p>By Loan Accounts plc</p>
          <ul className="login-features">
            <li>Monitoring</li>
            <li>Management</li>
            <li>Exporting</li>
          </ul>
        </div>
      </div>
      <div className="login-white-div">
        <img src={logo1} alt="loan accounts logo" className="login-logo" />
        <div className="login-content">
          <h2>Welcome</h2>
          <p>Please enter your credentials to login</p>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={credentials.rememberMe}
                  onChange={handleChange}
                />
                {""}
                Remember me
              </label>
              <button
                className="forgot-password"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleSubmit} className="login-button">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
