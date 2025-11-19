import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { LoanProvider } from "./context/LoanContext.jsx";
import { ActualProvider } from "./context/ActualContext.jsx";
import { DepositProvider } from "./context/DepositContext.jsx";
import { DelinquencyProvider } from "./context/DelinquencyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoanProvider>
        <ActualProvider>
          <DepositProvider>
            <DelinquencyProvider>
              <App />
            </DelinquencyProvider>
          </DepositProvider>
        </ActualProvider>
      </LoanProvider>
    </BrowserRouter>
  </React.StrictMode>
);
