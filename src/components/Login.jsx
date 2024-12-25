import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

function Login() {
 
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    address: '',
    email: '',
    OTP: '',
    location: '', 
  });

  
  const [showOTP, setShowOTP] = useState(false);

 
  const [error, setError] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!formData.fullName || !formData.mobileNumber || !formData.email || !formData.OTP || !formData.address || !formData.location) {
      setError('Please fill in all fields!');
      return;
    }

   
    console.log('Login Successful:', formData);
    alert('Login Successful!');
  };

  
  const toggleOTPVisibility = () => {
    setShowOTP((prevState) => !prevState);
  };

  
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
         
          setFormData((prevState) => ({
            ...prevState,
            location: `Lat: ${latitude}, Long: ${longitude}`, // Placeholder location
          }));
        },
        (error) => {
          alert('Unable to retrieve location. Please enter manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', backgroundColor: '#ffe6f1', padding: '15px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#333', fontSize: '20px' }}>Login</h2>

     
      {error && <div style={{ color: 'red', marginBottom: '10px', fontSize: '14px' }}>{error}</div>}

      <form onSubmit={handleSubmit}>
      
        <div style={{ marginBottom: '8px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '14px' }}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              margin: '4px 0',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '4px',
              color: '#333',
              fontSize: '14px',
            }}
          />
        </div>

        <div style={{ marginBottom: '8px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '14px' }}>Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            pattern="^\d{10}$" 
            style={{
              width: '100%',
              padding: '8px',
              margin: '4px 0',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '4px',
              color: '#333',
              fontSize: '14px',
            }}
          />
        </div>

     
        <div style={{ marginBottom: '8px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '14px' }}>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              margin: '4px 0',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '4px',
              color: '#333',
              fontSize: '14px',
              height: '60px', 
            }}
          />
        </div>

       
        <div style={{ marginBottom: '8px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '14px' }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              margin: '4px 0',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '4px',
              color: '#333',
              fontSize: '14px',
            }}
          />
        </div>

        <div style={{ marginBottom: '8px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '14px' }}>OTP</label>
          <input
            type={showOTP ? 'text' : 'password'} 
            name="OTP"
            value={formData.OTP}
            onChange={handleChange}
            required
            pattern="^\d{6}$"  
            style={{
              width: '100%',
              padding: '8px',
              margin: '4px 0',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '4px',
              color: '#333',
              fontSize: '14px',
            }}
          />
        </div>

      
        <div style={{ marginBottom: '8px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#666', fontSize: '14px' }}>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Location (or use geolocation)"
            style={{
              width: '100%',
              padding: '8px',
              margin: '4px 0',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '4px',
              color: '#333',
              fontSize: '14px',
            }}
          />
          <button
            type="button"
            onClick={getLocation}
            style={{
              backgroundColor: '#ff66b2',
              color: '#fff',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '8px',
              fontSize: '14px',
            }}
          >
            Use My Location
          </button>
        </div>

        {/* Link to Vegetable List page */}
        <Link to="/Mainpage">
          <button
            type="button" 
            style={{
              width: '100%',
              padding: '8px',
              backgroundColor: '#ff66b2', 
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s',
            }}
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
