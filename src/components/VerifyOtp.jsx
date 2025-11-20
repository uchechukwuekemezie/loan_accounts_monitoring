import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/VerifyOtp.css";
import logo1 from "../assets/Picture1.png";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "abc@email.com"; // fallback email if none is provided

  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    console.log(`Input at index ${index}: "${value}"`); // Enhanced debug log with quotes
    // allow only numbers
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      console.log(`Updated OTP: ${newOtp.join("")}`); // Log the full OTP state

      // move to the next input if a digit is entered
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(paste)) {
      setOtp(paste.split(""));
      inputRefs.current[5].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    const expectedOtp = "123456";
    if (otpValue === expectedOtp) {
      setError("");
      navigate("/Dashboard.jsx");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="verify-otp-container">
      {/* The purple left panel */}
      <div className="verify-otp-purple-div">
        <div className="verify-otp-purple-content">
          <h1>Loan Accounts Monitoring</h1>
          <p>By Loan Accounts plc</p>
          <ul className="verify-otp-features">
            <li>Monitoring</li>
            <li>Management</li>
            <li>Exporting</li>
          </ul>
        </div>
      </div>
      {/* Thw white right panel */}
      <div className="verify-otp-white-div">
        <img src={logo1} alt="loan accounts logo" className="verify-otp-logo" />
        <div className="verify-otp-content">
          <h3>We sent a code to your email</h3>
          <p>
            Enter the 6 digit code that was sent to <strong>{email}</strong>
          </p>
          <form onSubmit={handleSubmit} className="verify-otp-form">
            <div className="otp-box">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  className="otp-input"
                  required
                />
              ))}
            </div>
            <p className="resend-code">
              Didn't receive the code?{" "}
              <a href="#" className="resend-link">
                Resend Code
              </a>
            </p>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="verify-otp-button">
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
