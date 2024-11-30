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


// import React, { useEffect, useState } from "react"; // Import necessary modules
// import axios from "axios"; // Import axios for HTTP requests

// const TestimonialsPage = () => {
//   const [testimonials, setTestimonials] = useState([]); // State to hold testimonials

//   // useEffect hook to fetch testimonials when the component mounts
//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/testimonials"); // Fetch testimonials from the backend
//         console.log(response.data); // Log the fetched data
//         setTestimonials(response.data); // Set the state with fetched testimonials
//       } catch (error) {
//         console.error("Error fetching testimonials:", error); // Handle any errors
//       }
//     };

//     fetchTestimonials(); // Call the function to fetch testimonials
//   }, []); // Empty dependency array to run once on mount

//   return (
//     <div>
//       <h2>User Testimonials</h2>
//       {testimonials.length === 0 ? ( // Check if there are testimonials
//         <p>No testimonials yet.</p> // Display message if none
//       ) : (
//         <ul>
//           {testimonials.map((testimonial, index) => ( // Map through testimonials and display them
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

// export default TestimonialsPage; // Export the component


import React, { useEffect, useState } from "react";
import axios from "axios";

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/testimonials");
        console.log(response.data);
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e", // Dark gray background
        color: "#ffffff", // White text
        padding: "40px",
        minHeight: "100vh",
        fontFamily: "Roboto, sans-serif",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#007bff", // Blue accent color for heading
          marginBottom: "30px",
        }}
      >
        User Testimonials
      </h2>

      {testimonials.length === 0 ? (
        <p
          style={{
            fontSize: "18px",
            color: "#bbb", // Light gray for no testimonials message
          }}
        >
          No testimonials yet.
        </p>
      ) : (
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#2e2e2e", // Slightly lighter dark background for each testimonial
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#007bff", // Blue for the user's name
                  marginBottom: "10px",
                }}
              >
                {testimonial.name}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#ddd", // Light gray for the message
                  marginBottom: "10px",
                }}
              >
                {testimonial.message}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#999", // Subtle gray for the date
                  fontStyle: "italic",
                }}
              >
                {new Date(testimonial.date).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestimonialsPage;
