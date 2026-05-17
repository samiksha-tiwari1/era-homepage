// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";
import "./styles/index.css";
import { HelmetProvider } from "react-helmet-async"; // ✅ import HelmetProvider

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider> {/* wrap your app */}
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);