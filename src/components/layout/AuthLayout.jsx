// src/components/layout/AuthLayout.jsx
import React from "react";

const AuthLayout = ({ children, backgroundColor }) => {
  return (
    <section
      style={{
        backgroundColor: backgroundColor || "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
      }}
    >
      {children}
    </section>
  );
};

export default AuthLayout;
