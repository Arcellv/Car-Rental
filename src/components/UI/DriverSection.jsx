import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';

import "../../styles/DriverSection.css";
import driver_img from '../../assets/all-images/car1.avif';

const DriverSection = () => {
  return (
    <motion.section
      className="driver"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="driver-img">
            <img src={driver_img} alt="Driver" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="title_section driver_title">
              Want to Earn with Us? So do not be late
            </h2>

            <button className="btn driver-btn mt-4">
              Become a Driver too!
            </button>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default DriverSection;
