import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <header>

      <p>ELITE EDGE FITNESS</p>
      
    </header>

    <div className="lgin">   

        <ul div= 'timepass' style={{backgroundColor:'transparent'}}>
          <li>
            <Link to="/login" style={{textDecoration:'none',fontFamily:'cursive',color: '#0095ff'}} >Login</Link> 
          </li>
          <li>
            <Link to="/register" style={{textDecoration:'none',fontFamily:'cursive',color: '#0095ff'}}>Register</Link> 
          </li>
        </ul>
    </div>
      
    </>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <header>
//         <p>ELITE EDGE FITNESS</p>
//       </header>

//       <ul style={{
//         display: 'flex',
//         justifyContent: 'center',
//         position: 'absolute',
//         top: '20px',  // Adjust as needed to place it close to the top
//         left: '50%',
//         transform: 'translateX(-50%)',  // To center it horizontally
//         backgroundColor: 'transparent',
//         listStyleType: 'none',
//         padding: '0',
//         margin: '0'
//       }}>
//         <li style={{ marginRight: '20px' }}>
//           <Link 
//             to="/login" 
//             style={{
//               textDecoration: 'none',
//               padding: '10px 20px',
//               backgroundColor: '#0095ff',
//               color: '#fff',
//               borderRadius: '5px',
//               fontFamily: 'Arial, sans-serif'
//             }}>
//             Login
//           </Link>
//         </li>
//         <li>
//           <Link 
//             to="/register" 
//             style={{
//               textDecoration: 'none',
//               padding: '10px 20px',
//               backgroundColor: '#0095ff',
//               color: '#fff',
//               borderRadius: '5px',
//               fontFamily: 'Arial, sans-serif'
//             }}>
//             Register
//           </Link>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default Navbar;

