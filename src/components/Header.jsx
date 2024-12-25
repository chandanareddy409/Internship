import React from 'react';
import { Link } from 'react-router-dom';  
function Header() {
  const navbarStyle = {
    padding: "10px 0",
    backgroundColor: "#007bff",  
  };

  const linkStyle = {
    color: "#fff", 
    padding: "9px 12px",
    fontSize: "16px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    textDecoration: "none",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
      <div className="container-fluid">
        {/* Nature's Basket with shopping cart icon next to it */}
        <Link className="navbar-brand" to="/" style={linkStyle}>
        Nature's Basket

          {/* Font Awesome shopping cart icon with custom size */}
          <i className="bi bi-cart-check-fill" style={{ marginLeft: "10px", fontSize: "24px" }}></i>  {/* Custom font size */}
        </Link>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={linkStyle}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Mainpage" style={linkStyle}>Mainpage</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs" style={linkStyle}>About Us</Link>
            </li>
            {/* Contact Us with icon */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/ContactUs" style={linkStyle}>
               Contact Us
            <i className="bi bi-telephone" style={{ fontSize: "18px", marginLeft: "8px" }}></i>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/Feedback" style={linkStyle}>Feedback</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Payment" style={linkStyle}>Payment</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
