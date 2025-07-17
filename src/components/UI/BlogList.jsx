import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { motion } from 'framer-motion';

import '../../styles/BlogList.css';
import blogData from '../../assets/data/dataBlog';

const BlogList = () => {
  return (
    <>
      {blogData.map(item => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <motion.div
        className="blog_item"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img src={imgUrl} alt={title} className="w-100" />
        <div className="blog_info p-3">
          <Link to={`/Blogs/${title}`} className="blog_title">
            {title}
          </Link>
          <p className="description_section mt-3">
            {description.length > 100 ? description.substr(0, 100) : description}
          </p>

          <Link to={`/Blogs/${title}`} className="read_more">
            Read More
          </Link>

          <div className="blog_time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="blog_author">
              <i className="ri-user-line"></i> {author}
            </span>

            <div className="d-flex align-items-center gap-3">
              <span className="d-flex align-items-center gap-1 description_section">
                <i className="ri-calendar-line"></i> {date}
              </span>

              <span className="d-flex align-items-center gap-1 description_section">
                <i className="ri-time-line"></i> {time}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Col>
  );
};

export default BlogList;
