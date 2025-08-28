// src/pages/SignUp.jsx
import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import AuthLayout from "../components/layout/AuthLayout";
import "../styles/SignUp.css";

const SignUp = () => {
  return (
    <AuthLayout backgroundColor="#f9f9f9">
      <div className="signup_card">
        <h2 className="form_title">Sign Up</h2>
        <Form>
          <FormGroup>
            <Label for="name">Full Name</Label>
            <Input type="text" id="name" placeholder="Enter your full name" />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" id="password" placeholder="Enter your password" />
          </FormGroup>

          <Button className="signup_btn" type="submit">Sign Up</Button>
        </Form>
        <p className="form_footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
