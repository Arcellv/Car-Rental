// src/components/layout/Layout.jsx
import React from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// Import other pages similarly

const Layout = () => {
  const location = useLocation();

  // Paths where you don't want header/footer
  const noHeaderFooterPaths = ["/login", "/signup"];

  const hideHeaderFooter = noHeaderFooterPaths.includes(location.pathname.toLowerCase());

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />

          {/* Add other routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Add NotFound or other routes here */}
        </Routes>
      </main>

      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
