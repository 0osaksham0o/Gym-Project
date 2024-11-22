// // src/components/TestimonialsPage.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TestimonialsPage = () => {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/testimonials");
//         setTestimonials(response.data);
//       } catch (error) {
//         console.error("Error fetching testimonials:", error);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   return (
//     <div>
//       <h2>User Testimonials</h2>
//       {testimonials.length === 0 ? (
//         <p>No testimonials yet.</p>
//       ) : (
//         <ul>
//           {testimonials.map((testimonial, index) => (
//             <li key={index}>
//               <p><strong>{testimonial.name}</strong>:</p>
//               <p>{testimonial.message}</p>
//               <p><em>{new Date(testimonial.date).toLocaleString()}</em></p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TestimonialsPage;


import React, { useEffect, useState } from "react"; // Import necessary modules
import axios from "axios"; // Import axios for HTTP requests

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]); // State to hold testimonials

  // useEffect hook to fetch testimonials when the component mounts
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/testimonials"); // Fetch testimonials from the backend
        console.log(response.data); // Log the fetched data
        setTestimonials(response.data); // Set the state with fetched testimonials
      } catch (error) {
        console.error("Error fetching testimonials:", error); // Handle any errors
      }
    };

    fetchTestimonials(); // Call the function to fetch testimonials
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <h2>User Testimonials</h2>
      {testimonials.length === 0 ? ( // Check if there are testimonials
        <p>No testimonials yet.</p> // Display message if none
      ) : (
        <ul>
          {testimonials.map((testimonial, index) => ( // Map through testimonials and display them
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

export default TestimonialsPage; // Export the component
