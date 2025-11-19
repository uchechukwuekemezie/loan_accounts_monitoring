import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/VerifyOtp.css";
import logo1 from "../assets/accion-logo-svg-orange.svg";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "abc@email.com"; // fallback email if none is provided

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
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handlekeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      e.preventDefault(); // prevent default backspace behaviour
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      document.getElementById(`otp-input-${index - 1}`).focus();
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

  return (
    <div className="verify-otp-container">
      <div className="verify-otp-orange-div">
        <div className="verify-otp-orange-content">
          <h1>T24 Report Access</h1>
          <p>By AccionMFB</p>
          <ul className="verify-otp-features">
            <li>Monitoring</li>
            <li>Management</li>
            <li>Exporting</li>
          </ul>
        </div>
      </div>
      <div className="verify-otp-white-div">
        <img src={logo1} alt="Accion logo" className="verify-otp-logo" />
        <div className="verify-otp-content">
          <h3>We sent a code to your email</h3>
          <p>
            Enter the 6 digit code that was sent to your email: {email}
          </p>
          <form onSubmit={handleSubmit} className="verify-otp-form">
            <div className="otp-box">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handlekeyDown(e, index)}
                  className="otp-input"
                  autoFocus={index === 0}
                  required
                />
              ))}
            </div>
            <p className="resend-code">
              Didn't get the code?{" "}
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
