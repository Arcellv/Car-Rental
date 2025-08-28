import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/Header.css";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/cars", display: "Cars" },
  { path: "/blogs", display: "Blogs" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu_active");

  return (
    <header className="header">
      {/*======================== Header Top ==================== */}
      <div className="header_top">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6" sm="6">
              <div className="header_top_left d-flex align-items-center gap-3">
                <span>Need Help?</span>
                <span className="header_top_help d-flex align-items-center gap-1">
                  <i className="ri-phone-fill"></i> +90 533-884-0966
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className="d-flex align-items-center gap-1 auth-link">
                  <i className="ri-login-circle-line"></i>Log in
                </Link>
                <Link to="/signup" className="d-flex align-items-center gap-1 auth-link">
                  <i className="ri-user-line"></i>Sign up
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*========================= Header Middle ======================= */}
      <div className="header_middle">
        <Container>
          <Row className="align-items-center">
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-roadster-fill"></i>
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header_location-content">
                  <h4>Northern Cyprus</h4>
                  <h6>Nicosia, Northern Cyprus</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header_location-content">
                  <h4>Monday to Friday</h4>
                  <h6>9am - 4pm</h6>
                </div>
              </div>
            </Col>

            <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
              <button className="header_btn btn">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Call Request
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/*======================== Main Navigation =====================*/}
      <div className="main_navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile_menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active nav_item" : "nav_item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
                {/* Mobile auth links */}
                <div className="mobile_auth_links d-flex flex-column gap-3 mt-4 d-lg-none">
                  <Link to="/login" className="d-flex align-items-center gap-1">
                    <i className="ri-login-circle-line"></i>Log in
                  </Link>
                  <Link to="/signup" className="d-flex align-items-center gap-1">
                    <i className="ri-user-line"></i>Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
