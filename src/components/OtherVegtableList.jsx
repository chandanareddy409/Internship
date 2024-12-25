import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './OtherVegtableList.css'; 

function OtherVegetableList() {
  const [cart, setCart] = useState([]);  
  const navigate = useNavigate(); 

  const vegtables = [
    { name: 'Cucumber', image: 'https://4.imimg.com/data4/EE/EE/GLADMIN-/images-res-cucumber-20yellow-20round-500x500.jpg' },
    { name: 'Tomato', image: 'https://static.independent.co.uk/2023/02/21/14/21144058-5e7500a4-510e-4d4a-b8db-ab4c7789f562.jpg' },
    { name: 'Brinjal', image: 'https://n4.sdlcdn.com/imgs/e/v/m/Indian-Brinjal-Seeds-by-National-SDL808092365-1-cdf90.jpg' },
    { name: 'Potato', image: 'https://fthmb.tqn.com/NUpt7Rt5AleutxaJ9H1052sYB_M=/3881x2566/filters:fill(FFDB5D,1)/potatoes-116008750-596413603df78cdc68c061f3.jpg' },
    { name: 'Sweet Potato', image: 'https://vtwp-media.s3-accelerate.amazonaws.com/2020/11/1280px-Ipomoea_batatas_006.jpg' },
    { name: 'Gherkin', image: 'https://thumbs.dreamstime.com/b/tindoora-gherkins-fresh-organic-vegetable-green-white-vegetables-78958606.jpg' },
    { name: 'Drumstick', image: 'https://www.healthifyme.com/blog/wp-content/uploads/2022/03/shutterstock_1663988527-1-1024x682.jpg' },
    { name: 'Bottle Gourd', image: 'https://farmhouse.com.pk/wp-content/uploads/2017/03/bottle-gourd.jpeg' },
    { name: 'Snake Gourd', image: 'https://www.ayurtimes.com/wp-content/uploads/2014/10/Snake-Gourd-1024x576.jpg' },
    { name: 'Carrot', image: 'https://images-na.ssl-images-amazon.com/images/I/71S6oQqVa5L._SL1500_.jpg' },
    { name: 'Radish', image: 'http://www.southernexposure.com/images/large/radish-cherry-belle_LRG.jpg' },
    { name: 'Beetroot', image: 'https://bivianodirect.com.au/wp-content/uploads/2020/07/products-A6D0DF72-8722-474B-BA93-45071A0C7559_d66172ae-b946-4e93-9fd9-f72707da520a.jpg' },
    { name: 'Cauliflower', image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/282/282844/cauliflower-is-rich-in-nutrients-and-fiber.jpg?w=1155&h=1541' },
    { name: 'Broccoli', image: 'https://images.ctfassets.net/ruek9xr8ihvu/5xcjkpuCiDASkDtJzeTNLb/18b48bbc4d94346dabb4b6ba3ad06990/Broccoli_edited-scaled.jpg' },
    { name: 'Peas', image: 'https://www.thespruceeats.com/thmb/441psvVck3KA556uuZDah6OSSPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-104822169-e3d12c6f015142149654b8f8fe8e76b8.jpg' },
    { name: 'Onion', image: 'https://healthyfamilyproject.com/wp-content/uploads/2020/05/Onions-background.jpg' },
    { name: 'Cabbage', image: 'https://i5.walmartimages.ca/images/Enlarge/272/109/6000191272109.jpg' },
    { name: ' Okra', image: 'http://image.made-in-china.com/2f0j00WeoEIZvnycbd/OKRA.jpg' },
    { name: ' Eggplant', image: 'https://i.pinimg.com/originals/79/a6/6c/79a66c1a8c35e6b65a8f7b8572baec3b.jpg' },
    { name: 'Chili', image: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/4/7/chillies.jpg' }
  ];

  
  const handleAddToCart = (vegName) => {
    const isItemInCart = cart.some(item => item.name === vegName);
    if (isItemInCart) {
      alert(`${vegName} is already in the cart!`);
    } else {
      setCart([...cart, { name: vegName }]);  
      alert(`${vegName} has been added to the cart!`);
    } 
    navigate("/Additems", { state: { cart: [...cart, { name: vegName }] } });
  };

  return (
    <div className="vegtable-list-container">
      <h2>Fresh Vegetables</h2>
      <div className="vegtable-grid">
        {vegtables.map((vegtable, index) => (
          <div key={index} className="vegtable-card">
            <img src={vegtable.image} alt={vegtable.name} />
            <p>{vegtable.name}</p>
            <button onClick={() => handleAddToCart(vegtable.name)} className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>

      
      <div className="cart-container">
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default OtherVegetableList;
