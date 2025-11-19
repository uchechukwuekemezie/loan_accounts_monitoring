import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPassword.css";
import logo1 from "../assets/accion-logo-svg-orange.svg";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setError("Please enter your email address.");
        } else {
            setError("");
            // navigate to verify otp page with email as state
            navigate("/VerifyOtp.jsx", {state: {email}});
        }
    }

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-orange-div">
                <div className="forgot-password-orange-content">
                    <h1>T24 Report Access</h1>
                    <p>By AccionMFB</p>
                    <ul className="verify-otp-features">
                        <li>Monitoring</li>
                        <li>Management</li>
                        <li>Exporting</li>
                    </ul>
                </div>
            </div>
            <div className="forgot-password-white-div">
                <img src={logo1} alt="Accion logo" className="forgot-password-logo" />
                <div className="forgot-password-content">
                    <h3>Forgot Password?</h3>
                    <p>Enter the email associated with your account. We will send you a verification code.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" value={email} onChange={handleChange} placeholder="Enter your email" required />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="forgot-password-button">Send Verification Code</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default ForgotPassword;