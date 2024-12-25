
import React from 'react';
import './Welcome.css'; 

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Nature's Basket</h1>
      <p>People Who Love To Eat Are Always The Best People</p>
      <img 
        src="https://www.pngall.com/wp-content/uploads/2016/03/Vegetable-Free-PNG-Image.png" 
        alt="Welcome Image" 
        className="welcome-image" 
      />
    </div>
  );
};

export default Welcome;
