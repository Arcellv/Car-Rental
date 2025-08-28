import React from "react";

const AuthLayout = ({ children, backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor || "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
