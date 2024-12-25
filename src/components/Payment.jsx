import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const { state } = useLocation(); 
  const [cart, setCart] = useState(state?.cart || []);  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePopupOpen = () => {
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
  };

 
  const removeFromCart = (itemName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f7f7', padding: '20px' }}>
      <div style={{ width: '60%', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Nature's Basket - Payment Page</h1>

        {cart.length > 0 ? (
          <div>
            {cart.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                
                <div style={{ flex: 2 }}>
                  <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '20px' }} />
                  <span style={{ fontSize: '16px', color: '#555' }}>{item.name}</span><br />
                  <span style={{ fontSize: '16px', color: '#555' }}>₹{item.price} per kg</span><br />
                </div>

                
                <div style={{ flex: 1, textAlign: 'right' }}>
                  <span style={{ fontSize: '16px', color: '#555' }}>₹{item.price * item.quantity}</span><br />
                  <span style={{ fontSize: '14px', color: '#888' }}>x{item.quantity}</span><br />

                 
                  <button
                    onClick={() => removeFromCart(item.name)} 
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#F44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      marginTop: '10px',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#888' }}>Your cart is empty.</p>
        )}

        
        <div style={{ textAlign: 'right', paddingTop: '20px', fontSize: '18px', color: '#333' }}>
          <span style={{ fontWeight: 'bold' }}>Total Amount:</span> ₹{calculateTotal()}
        </div>

       
        {cart.length > 0 && (
          <button
            onClick={handlePopupOpen}
            style={{
              display: 'block',
              width: '100%',
              padding: '12px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '18px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            Successfully Added
          </button>
        )}
      </div>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              width: '80%',
              maxWidth: '400px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ color: '#333' }}>Thank You for Visiting!</h3>
            <p style={{ color: '#555' }}>Your items have been successfully added to the cart.</p>
            <button
              onClick={handlePopupClose}
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                marginTop: '20px',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
