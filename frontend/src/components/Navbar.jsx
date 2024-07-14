// import React from 'react';
// import { SignInButton, useAuth, SignOutButton } from '@clerk/clerk-react';

// const Navbar = () => {
//   const { isSignedIn } = useAuth();

//   return (
//     <nav style={{ 
//       display: 'flex', 
//       justifyContent: 'space-between', 
//       alignItems: 'center', 
//       padding: '1rem', 
//       backgroundColor: 'green',
//       color: 'white' 
//     }}>
//       <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
//         GoFood
//       </div>
//       <div style={{ display: 'flex', gap: '1rem' }}>
//         <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
//         <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
//         {isSignedIn ? (
//           <>
//           <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
//               My Orders
//             </button>

//             <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
//               My Cart
//             </button>
//           <SignOutButton>
//             <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
//               Logout
//             </button>
            
//           </SignOutButton>
//           </>
          
//         ) : (
//           <SignInButton>
//             <button style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
//               Login
//             </button>
//           </SignInButton>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// //working
// import React from 'react';
// import { SignInButton, useAuth, SignOutButton } from '@clerk/clerk-react';

// const Navbar = () => {
//   const { isSignedIn } = useAuth();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container">
//         <a className="navbar-brand" href="#">GoFood</a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="#about">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#contact">Contact</a>
//             </li>
//             {isSignedIn ? (
//               <>
//                 <li className="nav-item">
//                   <button className="btn btn-link nav-link">
//                     My Orders
//                   </button>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-link nav-link">
//                     My Cart
//                   </button>
//                 </li>
//                 <li className="nav-item">
//                   <SignOutButton>
//                     <button className="btn btn-link nav-link">
//                       Logout
//                     </button>
//                   </SignOutButton>
//                 </li>
//               </>
//             ) : (
//               <li className="nav-item">
//                 <SignInButton>
//                   <button className="btn btn-link nav-link">
//                     Login
//                   </button>
//                 </SignInButton>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from 'react';
import { SignInButton, useAuth, SignOutButton } from '@clerk/clerk-react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  const { isSignedIn } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Volatility</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="upload">Upload</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="commands">Commands</Nav.Link>
          {isSignedIn ? (
            <>
              
              <SignOutButton>
                <Nav.Link as="button" style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
                  Logout
                </Nav.Link>
              </SignOutButton>
            </>
          ) : (
            <SignInButton>
              <Nav.Link as="button" style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
                Login
              </Nav.Link>
            </SignInButton>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
