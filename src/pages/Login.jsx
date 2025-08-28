// src/pages/Login.jsx
import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import AuthLayout from "../components/layout/AuthLayout";
import "../styles/Login.css";

const Login = () => {
  return (
    <AuthLayout backgroundColor="#f9f9f9">
      <div className="login_card">
        <h2 className="form_title">Login</h2>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" id="password" placeholder="Enter your password" />
          </FormGroup>

          <Button className="login_btn" type="submit">Login</Button>
        </Form>
        <p className="form_footer">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
