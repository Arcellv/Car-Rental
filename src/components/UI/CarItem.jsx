import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/CarItem.css';

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, speed, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <motion.div
        className="car_item"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="car_img">
          <img src={imgUrl} alt={carName} className="w-100" />
        </div>

        <div className="car_item-content mt-4">
          <h4 className="section_title text-center">{carName}</h4>
          <h6 className="rent_price text-center mt">
            {price}.00 <span>/ Day</span>
          </h6>

          <div className="car_item-info d-flex align-items-center justify-content-between mt-3 mb">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-car-line" />
              {model}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-settings-2-line" />
              {automatic}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line" />
              {speed}
            </span>
          </div>

          <button className="w-50 car_item-btn car_btn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className="w-50 car_item-btn car_btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </motion.div>
    </Col>
  );
};

export default CarItem;
