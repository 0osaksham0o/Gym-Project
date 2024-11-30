// import React from "react";

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="content">
//         <div className="title">
//           <h1>LET'S</h1>
//           <h1>GET</h1>
//           <h1>MOVING</h1>
//         </div>
//         <div className="sub-title">
//           <p>Your Journey to Fitness Starts Here</p>
//           <p>Unleash Your Potential</p>
//         </div>
//         <div className="buttons">
//           <button>Start Your Journey</button>
//           <button>Discover Your Plan</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import React from "react";
// import { useAuth } from "../../context/AuthContext";

// const Hero = () => {
//   const { username } = useAuth();  // Access the username from context

//   return (
//     <section className="hero">
//       <div className="content">
//         <div className="title">
//           <h1>LET'S</h1>
//           <h1>GET</h1>
//           <h1>MOVING</h1>
//         </div>
//         {username ? (
//           <p       style={{
//             position: 'absolute',
//             top: '20px',  // Adjust as needed
//             right: '18px',  // Adjust as needed
//             padding: '10px',
//             // backgroundColor: 'lightgray',
//             borderRadius: '5px',
//             color: '#0095ff',
//             backgroundColor:'transparent',
//             fontSize:'20px',
//             fontFamily:'cursive',
//           }}>Welcome, {username}!</p>  // Display username if logged in
//         ) : (
//           <p>Welcome, Guest!</p>  // Fallback for guests
//         )}
        
//         <div className="sub-title">
//           <p>Your Journey to Fitness Starts Here</p>
//           <p>Unleash Your Potential</p>
//         </div>
//         <div className="buttons">
//           <button>Start Your Journey</button>
//           <button>Discover Your Plan</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Chatbot from "./Chatbot"; // Import the Chatbot component

const Hero = () => {
  const { username } = useAuth(); // Access the username from context
  const [showChatbot, setShowChatbot] = useState(false); // Manage chatbot visibility

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        {username ? (
          <p
            style={{
              position: 'absolute',
              top: '20px',
              right: '18px',
              padding: '10px',
              borderRadius: '5px',
              color: '#0095ff',
              backgroundColor: 'transparent',
              fontSize: '20px',
              fontFamily: 'cursive',
            }}
          >
            Welcome, {username}!
          </p>
        ) : (
          <p>Welcome, Guest!</p>
        )}

        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button>Start Your Journey</button>
          <button>Discover Your Plan</button>
        </div>

        {/* Button to toggle the chatbot visibility */}
        <button onClick={() => setShowChatbot(!showChatbot)}>
          {showChatbot ? "Close Chatbot" : "Chat with Us"}
        </button>

        {showChatbot && <Chatbot />} {/* Show the chatbot when active */}
      </div>
    </section>
  );
};

export default Hero;
