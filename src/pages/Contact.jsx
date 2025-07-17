import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const socialLinks = [
    { url: "#", icon: "ri-facebook-line" },
    { url: "#", icon: "ri-instagram-line" },
    { url: "#", icon: "ri-linkedin-line" },
    { url: "#", icon: "ri-twitter-line" },
  ];

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />

      <section className="contact_section">
        <Container>
          <Row className="gy-5">
            <Col lg="7" md="7">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h6 className="fw-bold mb-4">Get In Touch</h6>
                <Form>
                  <FormGroup className="mb-3">
                    <Label for="name" className="form-label">Your Name</Label>
                    <Input id="name" placeholder="Your Name" type="text" />
                  </FormGroup>

                  <FormGroup className="mb-3">
                    <Label for="email" className="form-label">Email</Label>
                    <Input id="email" placeholder="Email" type="email" />
                  </FormGroup>

                  <FormGroup className="mb-3">
                    <Label for="message" className="form-label">Message</Label>
                    <Input
                      id="message"
                      type="textarea"
                      rows={7}
                      placeholder="Write your message..."
                      className="py-3 px-3"
                    />
                  </FormGroup>

                  <button className="contact_btn" type="submit">
                    Send Message
                  </button>
                </Form>
              </motion.div>
            </Col>

            <Col lg="5" md="5">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="contact_info p-4 border rounded"
              >
                <h6 className="fw-bold mb-3">Contact Information</h6>
                <p className="description_section mb-2">
                  015 metehan-kermia, Ortakoy, Lefkosia
                </p>

                <div className="d-flex align-items-center gap-2 mb-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="description_section mb-0">+905338840966</p>
                </div>

                <div className="d-flex align-items-center gap-2 mb-4">
                  <h6 className="fs-6 mb-0">Email:</h6>
                  <p className="description_section mb-0">lomendjaa@gmail.com</p>
                </div>

                <h6 className="fw-bold mb-3">Follow Us:</h6>
                <div className="d-flex align-items-center gap-4 social_links">
                  {socialLinks.map((item, index) => (
                    <Link to={item.url} key={index} className="social_link">
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
