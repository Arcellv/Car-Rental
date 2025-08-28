import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/AboutSection.css";
import Img from "../../assets/all-images/offer2.webp";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      className="about_section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Text Content */}
          <Col lg="6" md="6">
            <div className="about_section-content">
              <h4 className="subtitle_section">About us</h4>
              <h2 className="title_section">
                Welcome to our car rental service
              </h2>
              <p className="description_section">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veniam consectetur beatae dolorum rerum architecto suscipit.
                Doloribus ullam tempora reprehenderit cum?
              </p>

              <p className="description_section">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veniam consectetur beatae dolorum rerum architecto suscipit.
                Doloribus ullam tempora reprehenderit cum?
              </p>

              <div className="about_features d-flex align-items-center gap-3">
                <p className="section_description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> High-quality vehicles
                </p>
                <p className="section_description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Affordable prices
                </p>
              </div>

              <div className="about_features d-flex align-items-center gap-3 mt-3">
                <p className="section_description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Easy booking
                </p>
                <p className="section_description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> 24/7 support
                </p>
              </div>
            </div>
          </Col>

          {/* Image */}
          <Col lg="6" md="6">
            <div className="about_img">
              <img src={Img} alt="about" className="w-100 rounded-3" />
            </div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default AboutSection;
