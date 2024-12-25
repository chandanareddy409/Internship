import React from 'react';


function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h4 style={headingStyle}>Contact Us</h4>
          <p style={textStyle}>
            For any inquiries, reach out to us at <br />
            <strong>Email:</strong> support@vegetablemart.com <br />
            <strong>Phone:</strong> +91 123 456 7890
          </p>
        </div>
        <div style={columnStyle}>
          <h4 style={headingStyle}>About VegetableMart</h4>
          <p style={textStyle}>
            We deliver fresh vegetables and groceries right to your doorstep. 
            Our mission is to provide high-quality produce with convenience.
          </p>
        </div>
      </div>
      <div style={bottomStyle}>
        <p style={footerTextStyle}>© 2024 VegetableMart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#2c3e50',
  color: '#fff',
  padding: '20px 0',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  paddingBottom: '20px',
};

const columnStyle = {
  flex: '1',
  maxWidth: '300px',
  padding: '0 20px',
  textAlign: 'left',
};

const headingStyle = {
  fontSize: '15px',
  fontWeight: 'bold',
};

const textStyle = {
  fontSize: '10px',
  lineHeight: '1.5',
};

const bottomStyle = {
  marginTop: '10px',
  borderTop: '1px solid #fff',
  paddingTop: '8px',
};

const footerTextStyle = {
  fontSize: '12px',
};

export default Footer;
