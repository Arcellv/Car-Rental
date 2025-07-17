import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

import '../../styles/Testimonial.css';

import ava01 from '../../assets/all-images/ava01.jpg';
import ava02 from '../../assets/all-images/ava02.avif';
import ava03 from '../../assets/all-images/ava03.jpeg';
import ava04 from '../../assets/all-images/ava04.webp';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,  // fixed capitalization
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1, // fixed capitalization
          slidesToScroll: 1, // changed from 2 to 1, usually scroll 1 for single slide
        },
      },
    ],
  };

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Testimonial data array for DRY principle
  const testimonials = [
    { id: 1, avatar: ava01, name: 'John Deen', role: 'Customer' },
    { id: 2, avatar: ava02, name: 'Dereck Humfrey', role: 'Customer' },
    { id: 3, avatar: ava03, name: 'Ken Belmand', role: 'Customer' },
    { id: 4, avatar: ava04, name: 'Benjin Lindow', role: 'Customer' },
  ];

  return (
    <Slider {...settings}>
      {testimonials.map(({ id, avatar, name, role }) => (
        <motion.div
          className="testimonial py-4 px-3"
          key={id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <p className="description_section">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            consectetur beatae dolorum rerum architecto suscipit. Doloribus ullam
            tempora reprehenderit cum?
          </p>

          <div className="mt-3 d-flex align-items-center gap-4">
            <img src={avatar} alt={name} className="w-25 h-25 rounded-2" />
          </div>

          <div>
            <h6 className="mb-0 mt-3">{name}</h6>
            <p className="description_section">{role}</p>
          </div>
        </motion.div>
      ))}
    </Slider>
  );
};

export default Testimonial;
