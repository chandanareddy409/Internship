import React, { useState } from 'react';
import './VegetableList.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 

const VegetableGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);  /* Adjust layout for smaller screens */
  }
`;

const VegetableCard = styled.div`
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  padding-bottom: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);  /* Slight lift on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);  /* Stronger shadow on hover */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #ddd;
`;

const VegetableName = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  color: #333;
`;

const AddToCartButton = styled.button`
  background-color: #6f42c1; /* Purple color */
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a2d8c; /* Darker purple on hover */
  }
`;

function VegetableList() {
  const navigate = useNavigate();  
  const [cart, setCart] = useState([]); 

  const vegetables = [
    { name: 'Spinach', image: 'https://pngimg.com/uploads/spinach/spinach_PNG45.png' },
    { name: 'Kale', image: 'https://healthyummyfood.com/wp-content/uploads/2020/11/kale.jpeg' },
    { name: 'Lettuce', image: 'https://st.depositphotos.com/1276052/1414/i/600/depositphotos_14146812-stock-photo-fresh-green-lettuce-isolated.jpg' },
    { name: 'Coriander', image: 'https://www.aprifel.com/wp-content/uploads/2019/02/coriandre.jpg' },
    { name: 'Mustard Greens', image: 'http://specialtyproduce.com/sppics/6750.png' },
    { name: 'Fenugreek', image: 'https://cdn.shopify.com/s/files/1/1698/1675/products/Fenugreek.jpg?v=1557464177' },
    { name: 'Moringa', image: 'https://2.bp.blogspot.com/-sJkMT5s43j8/Vd1COLB5s0I/AAAAAAAAACc/6nx0Dr2MibM/s1600/organic-moringa-oleifera-leaf-dgs-spices-kerala-spices-expoters.jpg' },
    { name: 'Collard Greens', image: 'http://www.onlyfoods.net/wp-content/uploads/2013/04/Collard-Greens.jpg' },
    { name: 'Arugula', image: 'https://specialtyproduce.com/sppics/6655.png' },
    { name: 'Swiss Chard', image: 'https://www.outsidepride.com/images/products/detail/herbseed/swisschardgreen2.jpg' },
    { name: 'Bok Choy', image: 'http://thewateringmouth.com/wp-content/uploads/2016/02/bok-choy-1-1024x669.jpg' },
    { name: 'Endive', image: 'https://www.gardenindelight.com/wp-content/uploads/2016/04/Endives-to-table.jpg' },
    { name: 'Curry Leaf', image: 'https://m.media-amazon.com/images/I/71vIr2lx34L._SL1420_.jpg' }, 
    { name: 'Mint', image: 'https://www.harishfoodzone.com/jb-content/uploads/2020/11/Fresh-Mint-Leaves.jpg' },  
    { name: 'Chard', image: 'https://toppng.com/public/uploads/preview/safe-leafy-greens-chard-green-leafy-vegetable-11562965091f5m7pzcmbt.png' },  
    { name: 'Sweet Basil', image: 'https://image.freepik.com/free-photo/leaf-sweet-basil-isolated-white_319514-2688.jpg' } 
  ];

  
  const addToCart = (vegetable) => {
    const updatedCart = [...cart, vegetable];  
    setCart(updatedCart);
    alert(`${vegetable.name} has been added to your cart!`);
    navigate("/Additems", { state: { cart: updatedCart } }); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Leaf Vegetables</h2>
      <VegetableGrid>
        {vegetables.map((vegetable, index) => (
          <VegetableCard key={index}>
            <Image src={vegetable.image} alt={vegetable.name} />
            <VegetableName>{vegetable.name}</VegetableName>
            <AddToCartButton onClick={() => addToCart(vegetable)}>
              Add to Cart
            </AddToCartButton>
          </VegetableCard>
        ))}
      </VegetableGrid>
    </div>
  );
}

export default VegetableList;
