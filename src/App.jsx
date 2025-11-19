import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import AccountSection from "./components/AccountSection";
import ActiveLoansSection from "./components/ActiveLoansSection";
import DelinquencySection from "./components/DelinquencySection";
import WriteOffSection from "./components/WriteOffSection";
import DepositSection from "./components/DepositSection";
import ActualSection from "./components/ActualSection";
import VerifyOtp from "./components/VerifyOtp";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import AdminManagement from "./components/AdminManagement";
import AuditTrail from "./components/AuditTrail";
import CtrComplianceSection from "./components/CtrComplianceSection";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/Dashboard.jsx" element={<Dashboard />} />
      <Route path="/AccountSection.jsx" element={<AccountSection />} />
      <Route path="/ActiveLoansSection.jsx" element={<ActiveLoansSection />} />
      <Route path="/DelinquencySection.jsx" element={<DelinquencySection />} />
      <Route path="/WriteOffSection.jsx" element={<WriteOffSection />} />
      <Route path="/DepositSection.jsx" element={<DepositSection />} />
      <Route path="/ActualSection.jsx" element={<ActualSection />} />
      <Route path="/VerifyOtp.jsx" element={<VerifyOtp />} />
      <Route path="/ForgotPassword.jsx" element={<ForgotPassword />} />
      <Route path="/ChangePassword.jsx" element={<ChangePassword />} />
      <Route path="/AdminManagement.jsx" element={<AdminManagement />} />
      <Route path="/AuditTrail.jsx" element={<AuditTrail />} />
      <Route
        path="/CtrComplianceSection.jsx"
        element={<CtrComplianceSection />}
      />
    </Routes>
  );
};

export default App;
