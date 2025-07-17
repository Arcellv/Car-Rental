import React from 'react';
import Slider from 'react-slick';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../../styles/HeroSlider.css';

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,     // fixed typo here: slidesToshow -> slidesToShow
    slidesToScroll: 1,   // fixed typo: slidesToscroll -> slidesToScroll
    pauseOnHover: false,
  };

  // Animation variants for slide content
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Slide data can be abstracted, but here we keep your structure for simplicity
  const slides = [
    { id: 1, className: 'slider_item-01' },
    { id: 2, className: 'slider_item-02' },
    { id: 3, className: 'slider_item-03' },
  ];

  return (
    <Slider {...settings} className="hero_slider">
      {slides.map(({ id, className }) => (
        <div key={id} className={`slider_item ${className} mt0`}>
          <Container>
            <motion.div
              className="slider_content"
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h6 className="text-light mb-3">For Rent $80 per day</h6>
              <h1 className="text-light mb-4">Reserve Now to get 50% Off</h1>

              <button className="btn reserve_btn mt-4">
                <Link to="/cars">Reserve Now</Link>
              </button>
            </motion.div>
          </Container>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
