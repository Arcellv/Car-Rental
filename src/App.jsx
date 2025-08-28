import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AuthLayout from "./components/layout/AuthLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <Routes>
      {/* Auth pages without header/footer */}
      <Route
        path="/login"
        element={
          <AuthLayout backgroundColor="#041f88">
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout backgroundColor="#f9a826">
            <SignUp />
          </AuthLayout>
        }
      />

      {/* Pages with header/footer */}
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
}

export default App;
