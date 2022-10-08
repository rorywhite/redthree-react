import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home.js";
import BankingIndex from "./components/BankingIndex.js";
import CashflowIndex from "./components/CashflowIndex.js";
import CheckerIndex from "./components/CheckerIndex.js";
import CompanyIndex from "./components/CompanyIndex.js";
import EuropeIndex from "./components/EuropeIndex.js";
import SharesIndex from "./components/SharesIndex.js";
import NoPage from "./components/NoPage.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="banking" element={<BankingIndex />} />
          <Route path="cashflow" element={<CashflowIndex />} />
          <Route path="checker" element={<CheckerIndex />} />
          <Route path="company" element={<CompanyIndex />} />
          <Route path="europe" element={<EuropeIndex />} />
          <Route path="shares" element={<SharesIndex />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
