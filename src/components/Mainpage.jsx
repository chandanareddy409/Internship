import React from "react";
import { Link } from "react-router-dom"; 
import './Mainpage.css'; 

function Mainpage() {
  const handleClick = (message) => {
    alert(message); 
  };

  return (
    <div className="main-container">
      <div className="card-container">
        {/* First card with redirection */}
        <div className="card">
          <img
            src="https://semencesancestrales.com/wp-content/uploads/2021/01/img_600df8e48dd4a.jpg"
            alt="LeafVegetable"
            className="card-image"
          />
          <Link to="/vegetable-list">  {/* Wrap the first button with a Link */}
            <button className="card-button">
              Click Me
            </button>
          </Link>
        </div>

        {/* Second card with redirection to other vegetables */}
        <div className="card">
          <img
            src="https://2.bp.blogspot.com/-eLx5DsaQBUw/V7-t4bKYXrI/AAAAAAAAAAk/C4EJf_8AX4I3ueWynepFeuq1DK8FCm-OACLcB/s1600/veg1.jpg"
            alt="FreshVegetable"
            className="card-image"
          />
          <Link to="/other-vegtable-list">  {/* Wrap the second button with a Link */}
            <button className="card-button">
              Click Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
