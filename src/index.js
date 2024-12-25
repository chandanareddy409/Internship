import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 


import Welcome from './components/Welcome'; 
import Login from './components/Login';  
import VegetableList from './components/VegetableList';  
import OtherVegtableList from './components/OtherVegtableList';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';

import Mainpage from './components/Mainpage';  
import AboutUs from './components/AboutUs';
import Payment from './components/Payment';
import AddedItems from './components/Additems';
import Submit from './components/Submit';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/", 
        element: <h1>Welcome to Nature's Basket</h1>,  
      },
      {
        path: "/welcome",  
        element: <Welcome />, 
      },
      {
        path: "/ContactUs",
        element: <ContactUs />, 
      },
      {
        path: "/feedback",
        element: <div>Feedback Page</div>,
      },
      {
        path: "/login",  
        element: <Login />, 
      },
      {
        path: "/vegetable-list",  
        element: <VegetableList />, 
      },
      {
        path: "/other-vegtable-list",
        element: <OtherVegtableList /> 
      },
      
      {
        path:"/Mainpage",  
        element: <Mainpage />
      },
      {
        path:"/AboutUs",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/Feedback",
        element:<Feedback></Feedback>
      },
      {
        path:"/Payment",
        element:<Payment></Payment>
      },
      {
        path:"/Additems",
        element:<AddedItems></AddedItems>
      },
      {
        path:"/submit",
        element:<Submit></Submit>
      }


    ]
  }
]);

// Render the application using RouterProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  {/* Add RouterProvider here, not in App.js */}
  </React.StrictMode>
);

reportWebVitals();
