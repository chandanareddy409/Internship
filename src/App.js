import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Welcome from './components/Welcome';
import Contactus from './components/ContactUs';
import Login from './components/Login';
import VegetableList from './components/VegetableList';
import OtherVegtableList from './components/OtherVegtableList';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import Mainpage from './components/Mainpage';
import Payment from './components/Payment';
import AddedItems from './components/Additems';
import Submit from './components/Submit';

function App() {
  const [cart, setCart] = useState([]);

  
  const addToCart = (item) => {
    const itemExists = cart.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  
  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId)); // Remove the item with the given ID
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/vegetable-list" element={<VegetableList />} />
        <Route path="/other-vegtable-list" element={<OtherVegtableList />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/Payment" element={<Payment cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/Additems" element={<AddedItems addToCart={addToCart} />} />
        <Route path="/Submit" element={<Submit addToCart={addToCart} />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
