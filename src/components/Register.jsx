// import React, { useState } from 'react';

// function Register() {
//   // State to handle form data
//   const [formData, setFormData] = useState({
//     fullName: '',
//     mobileNumber: '',
//     address: '',
//     email: '',
//     OTP: '',
//     location: '', // Location state
//   });

//   // State for OTP visibility
//   const [showOTP, setShowOTP] = useState(false);

//   // State to manage error messages
//   const [error, setError] = useState('');

//   // Handle form field change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic form validation
//     if (!formData.fullName || !formData.mobileNumber || !formData.email || !formData.OTP || !formData.address || !formData.location) {
//       setError('Please fill in all fields!');
//       return;
//     }

//     // Simulate a successful registration submission
//     console.log('Registration Successful:', formData);
//     alert('Registration Successful!');
//   };

//   // Toggle OTP visibility
//   const toggleOTPVisibility = () => {
//     setShowOTP((prevState) => !prevState);
//   };

//   // Handle getting user's location
//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           // You can convert lat/long to an actual location using a geocoding API if needed
//           setFormData((prevState) => ({
//             ...prevState,
//             location: `Lat: ${latitude}, Long: ${longitude}`, // Placeholder location
//           }));
//         },
//         (error) => {
//           alert('Unable to retrieve location. Please enter manually.');
//         }
//       );
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '50px auto', backgroundColor: '#ffe6f1', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
//       <h2 style={{ textAlign: 'center', color: '#333' }}>Register</h2>

//       {/* Display error message if any */}
//       {error && <div style={{ color: 'red' }}>{error}</div>}

//       <form onSubmit={handleSubmit}>
//         {/* Full Name */}
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             style={{
//               width: '100%',
//               padding: '10px',
//               margin: '5px 0',
//               backgroundColor: '#fff',
//               border: '1px solid #ddd',
//               borderRadius: '4px',
//               color: '#333',
//             }}
//           />
//         </div>

//         {/* Mobile Number */}
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Mobile Number</label>
//           <input
//             type="tel"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             required
//             pattern="^\d{10}$"  // Optional: Validate mobile number format (e.g., 10 digits)
//             style={{
//               width: '100%',
//               padding: '10px',
//               margin: '5px 0',
//               backgroundColor: '#fff',
//               border: '1px solid #ddd',
//               borderRadius: '4px',
//               color: '#333',
//             }}
//           />
//         </div>

//         {/* Address */}
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Address</label>
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//             style={{
//               width: '100%',
//               padding: '10px',
//               margin: '5px 0',
//               backgroundColor: '#fff',
//               border: '1px solid #ddd',
//               borderRadius: '4px',
//               color: '#333',
//               height: '80px',
//             }}
//           />
//         </div>

//         {/* Email */}
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={{
//               width: '100%',
//               padding: '10px',
//               margin: '5px 0',
//               backgroundColor: '#fff',
//               border: '1px solid #ddd',
//               borderRadius: '4px',
//               color: '#333',
//             }}
//           />
//         </div>

//         {/* OTP */}
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>OTP</label>
//           <input
//             type={showOTP ? 'text' : 'password'} // Show OTP if toggle is active
//             name="OTP"
//             value={formData.OTP}
//             onChange={handleChange}
//             required
//             pattern="^\d{6}$"  // Assuming OTP is a 6-digit number
//             style={{
//               width: '100%',
//               padding: '10px',
//               margin: '5px 0',
//               backgroundColor: '#fff',
//               border: '1px solid #ddd',
//               borderRadius: '4px',
//               color: '#333',
//             }}
//           />
//         </div>

//         {/* Location */}
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Location</label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//             placeholder="Location (or use geolocation)"
//             style={{
//               width: '100%',
//               padding: '10px',
//               margin: '5px 0',
//               backgroundColor: '#fff',
//               border: '1px solid #ddd',
//               borderRadius: '4px',
//               color: '#333',
//             }}
//           />
//           <button
//             type="button"
//             onClick={getLocation}
//             style={{
//               backgroundColor: '#ff66b2',
//               color: '#fff',
//               border: 'none',
//               padding: '8px',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               marginTop: '10px',
//             }}
//           >
//             Use My Location
//           </button>
//         </div>

//         {/* Submit Button */}
//         <button type="submit" style={{
//           width: '100%',
//           padding: '10px',
//           backgroundColor: '#ff66b2', // Light pink button
//           color: '#fff',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer',
//           fontSize: '16px',
//           transition: 'background-color 0.3s',
//         }}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Register;
