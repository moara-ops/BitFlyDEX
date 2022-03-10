import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ConnectWallet from "./screens/ConnectWallet";
import DecentralizedTrading from "./screens/DecentralizedTrading";
import GovernanceProposals from "./screens/GovernanceProposals";
import Home from "./screens/Home";
import "./styles/export.scss";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/governance-proposals" element={<GovernanceProposals />} />
        <Route
          path="/decentralized-trading"
          element={<DecentralizedTrading />}
        />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
      </Routes>
      <Footer />
    </div>
  );
}
