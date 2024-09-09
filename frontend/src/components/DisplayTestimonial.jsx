// src/components/TestimonialsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/testimonials");
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div>
      <h2>User Testimonials</h2>
      {testimonials.length === 0 ? (
        <p>No testimonials yet.</p>
      ) : (
        <ul>
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <p><strong>{testimonial.name}</strong>:</p>
              <p>{testimonial.message}</p>
              <p><em>{new Date(testimonial.date).toLocaleString()}</em></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestimonialsPage;
