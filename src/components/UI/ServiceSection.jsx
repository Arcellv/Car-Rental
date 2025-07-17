import React from 'react';
import { Col } from 'reactstrap';
import '../../styles/ServiceSection.css';
import serviceData from '../../assets/data/serviceData';
import { motion } from 'framer-motion';

const ServiceSection = () => {
  return (
    <>
      {serviceData.map(item => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="6" className="mb-3">
    <motion.div
      className="service_item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="mb-3 d-inline-block">
        <i className={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="description_section">{item.desc}</p>
    </motion.div>
  </Col>
);

export default ServiceSection;
