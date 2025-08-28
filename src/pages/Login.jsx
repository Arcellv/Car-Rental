// src/pages/Login.jsx
import React from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import "../styles/Login-SignUp.css";

const Login = () => {
  return (
    <AuthLayout backgroundColor="#041f88"> {/* Blue background */}
      <Container>
        <Row className="justify-content-center">
          <Col lg="5" md="7" sm="10">
            <div
              className="p-5"
              style={{
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h4 className="title_section text-center mb-4">Welcome Back</h4>
              <h6 className="subtitle_section text-center mb-4">Login to continue</h6>

              <Form>
                <FormGroup className="mb-3">
                  <Input
                    type="text"
                    placeholder="Email or Username"
                    required
                    autoComplete="username"
                  />
                </FormGroup>

                <FormGroup className="mb-4">
                  <Input
                    type="password"
                    placeholder="Password"
                    required
                    autoComplete="current-password"
                  />
                </FormGroup>

                {/* Button with swapped color */}
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#f9a826", // Login button uses SignUp color
                    color: "#fff",
                    border: "none",
                    width: "100%",
                  }}
                >
                  Login
                </Button>

                <p className="text-center description_section mt-3">
                  Forgot password? <Link to="/forgot-password">Reset</Link>
                </p>

                <p className="text-center description_section">
                  Don't have an account?{" "}
                  <Link to="/signup" style={{ color: "#f9a826", fontWeight: "600" }}>
                    Sign up
                  </Link>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </AuthLayout>
  );
};

export default Login;
