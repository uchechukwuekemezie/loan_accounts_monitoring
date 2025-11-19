import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/ChangePassword.css";
import logo1 from "../assets/accion-logo-svg-orange.svg";

const ChangePassword = () => {
    const [passwords, setPasswords] = useState({
        newPassword: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!passwords.newPassword || !passwords.confirmPassword) {
           setError("Both fields are required.");
        } else if (passwords.newPassword !== passwords.confirmPassword) {
            setError("Passwords do not match");
        } else {
        setError("");
        // logic to change password
        navigate("Login.jsx");
    }
};

    return (
        <div className="change-password-container">
            <div className="change-password-orange-div">
                <div className="change-password-orange-content">
                    <h1>T24 Report Access</h1>
                    <p>By AccionMFB</p>
                    <ul className="change-password-features">
                        <li>Monitoring</li>
                        <li>Management</li>
                        <li>Exporting</li>
                    </ul>
                </div>
            </div>

            <div className="change-password-white-div">
                <img src={logo1} alt="Accion logo" className="change-password-logo" />
                <div className="change-password-content">
                    <h3>Create a new password</h3>
                    <p>Create a new password to continue.</p>
                    <form onSubmit={handleSubmit} className="change-password-form">
                        <div className="form-group">
                            <label htmlFor="newPassword">Enter new password</label>
                            <input type="password" id="newPassword" name="newPassword" value={passwords.newPassword} onChange={handleChange} placeholder="Enter your new password" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" value={passwords.confirmPassword} onChange={handleChange} placeholder="Confirm your new password" required/>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="change-password-button">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
};
    
export default ChangePassword;