import React from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../assets/data/data'; // Assume you have this data file

function Testimonials() {
    return (
      <div className="Testimonials">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonialCard">
            <div className="testimonialImage">
              <img src={testimonial.image} alt="Testimonial" />
            </div>
            <div className="testimonialContent">
              <h3 className="testimonialTitle">{testimonial.title}</h3>
              <p className="testimonialName">{testimonial.name}</p>
              <p className="testimonialDesc">{testimonial.description}</p>
              <div className="stars">
                {'★'.repeat(testimonial.stars)}
                {'☆'.repeat(5 - testimonial.stars)}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Testimonials;