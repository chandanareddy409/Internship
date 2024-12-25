import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';  
import './Feedback.css'; 

const Feedback = () => {
  const [rating, setRating] = useState(0);  
  const [comment, setComment] = useState(''); 

  const handleRatingClick = (index) => {
    setRating(index + 1);  
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback! You rated us ${rating} stars and commented: "${comment}"`);
    // Here you can send the feedback to a server or API if needed
    setRating(0);  // Reset rating after submission
    setComment('');  // Reset comment after submission
  };

  return (
    <div className="feedback-container">
      <h2>Nature's Basket Feedback</h2>

      <div className="rating-container">
        <p><strong>Your Rating:</strong></p>
        <div className="stars">
          {[...Array(5)].map((star, index) => (
            <FaStar
              key={index}
              className="star"
              size={30}
              color={index < rating ? "#ffbb33" : "#ddd"} 
              onClick={() => handleRatingClick(index)} 
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="comment-section">
          <textarea
            placeholder="Leave your comments here..."
            value={comment}
            onChange={handleCommentChange}
            rows="4"
            cols="50"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
