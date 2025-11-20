import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPassword.css";
import logo1 from "../assets/Picture1.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault;

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    // email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    navigate("/VerifyOtp.jsx", { state: { email } });
  };

  return (
    <div className="forgot-password-container">
      {/* The purple left panel */}
      <div className="forgot-password-purple-div">
        <div className="forgot-password-purple-content">
          <h1>Loan Accounts Monitoring</h1>
          <p>By Loan Accounts plc</p>
          <ul className="forgot-password-features">
            <li>Monitoring</li>
            <li>Management</li>
            <li>Exporting</li>
          </ul>
        </div>
      </div>
      {/* The white side panel */}
      <div className="forgot-password-white-div">
        <img
          src={logo1}
          alt="loan accounts logo"
          className="forgot-password-logo"
        />
        <div className="forgot-password-content">
          <h3>Forgot Password?</h3>
          <p>
            Enter the email associated with your account. We will send you a
            verification code to reset your password.
          </p>
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="forgot-password-button">
              Send Verification Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
