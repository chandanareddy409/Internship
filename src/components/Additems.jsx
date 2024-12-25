import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const vegetables = [
  {
    name: 'Spinach',
    image: 'https://pngimg.com/uploads/spinach/spinach_PNG45.png',
    price: 35,
    description: 'A healthy leafy green rich in iron and vitamins.'
  },
  {
    name: 'Kale',
    image: 'https://healthyummyfood.com/wp-content/uploads/2020/11/kale.jpeg',
    price: 40,
    description: 'Packed with nutrients, a superfood for your health.'
  },
  {
    name: 'Lettuce',
    image: 'https://st.depositphotos.com/1276052/1414/i/600/depositphotos_14146812-stock-photo-fresh-green-lettuce-isolated.jpg',
    price: 50,
    description: 'Packed with nutrients, a superfood for your health.'
  },
  
    {
      name: 'Coriander',
      image: 'https://www.aprifel.com/wp-content/uploads/2019/02/coriandre.jpg',
      price: 65,
      description: 'Coriander, also known as cilantro, is a herb with aromatic leaves and seeds commonly used in cooking. It has a fresh, citrusy flavor and is used in a variety of cuisines, including Indian, Mexican, and Middle Eastern.'
    },
    {
      name: 'Mustard Greens',
      image: 'http://specialtyproduce.com/sppics/6750.png',
      price: 45,
      description: 'Mustard greens are dark, leafy vegetables with a slightly spicy and tangy flavor. They are commonly used in Southern cooking and are rich in vitamins A, C, and K, as well as calcium and iron.'
    },
    {
      name: 'Fenugreek',
      image: 'https://cdn.shopify.com/s/files/1/1698/1675/products/Fenugreek.jpg?v=1557464177',
      price: 55,
      description: 'Fenugreek is an herb commonly used in cooking, especially in Indian and Middle Eastern cuisines. The seeds have a slightly bitter taste and are often used as a spice or in the preparation of herbal teas.'
    },
    {
      name: 'Moringa',
      image: 'https://2.bp.blogspot.com/-sJkMT5s43j8/Vd1COLB5s0I/AAAAAAAAACc/6nx0Dr2MibM/s1600/organic-moringa-oleifera-leaf-dgs-spices-kerala-spices-expoters.jpg',
      price: 35,
      description: 'Moringa, also known as the "drumstick tree," is a plant known for its high nutritional value. Its leaves are rich in vitamins, minerals, and antioxidants, often used in teas, powders, and supplements for their health benefits.'
    },
    {
      name: 'Collard Greens',
      image: 'http://www.onlyfoods.net/wp-content/uploads/2013/04/Collard-Greens.jpg',
      price: 45,
      description: 'Collard greens are large, dark green leafy vegetables with a mild, slightly bitter taste. They are a staple in Southern cuisine and are a good source of vitamins A, C, and K, along with fiber and antioxidants.'
    },
    
  {
    name: 'Cabbage',
    image: 'https://4.imimg.com/data4/EE/EE/GLADMIN-/images-res-cucumber-20yellow-20round-500x500.jpg',
    price: 40,
    description: 'Packed with nutrients, a superfood for your health.'
  },
  {
    name: 'Brinjal',
    image: 'https://n4.sdlcdn.com/imgs/e/v/m/Indian-Brinjal-Seeds-by-National-SDL808092365-1-cdf90.jpg',
    price: 80,
    description: 'Packed with nutrients, a superfood for your health.'
  },
  {
    name: 'Potato',
    image: 'https://fthmb.tqn.com/NUpt7Rt5AleutxaJ9H1052sYB_M=/3881x2566/filters:fill(FFDB5D,1)/potatoes-116008750-596413603df78cdc68c061f3.jpg',
    price: 100,
    description: 'Packed with nutrients, a superfood for your health.'
  },
  {
    name: 'Sweet Potato',
    image: 'https://vtwp-media.s3-accelerate.amazonaws.com/2020/11/1280px-Ipomoea_batatas_006.jpg',
    price: 48,
    description: 'Sweet potatoes are starchy root vegetables known for their sweet taste and vibrant orange color. They are rich in vitamins, particularly vitamin A, and provide a good source of fiber, antioxidants, and minerals. They can be roasted, boiled, mashed, or used in both savory and sweet dishes.'
  },
  {
    name: 'Gherkin',
    image: 'https://thumbs.dreamstime.com/b/tindoora-gherkins-fresh-organic-vegetable-green-white-vegetables-78958606.jpg',
    price: '35',
    description: 'Gherkins are small, crunchy cucumbers often used for pickling. They are tangy and mildly sour, commonly found in salads, sandwiches, and as a side dish. Gherkins are low in calories and rich in water content, making them a refreshing snack.'
  },
  {
    name: 'Drumstick',
    image: 'https://www.healthifyme.com/blog/wp-content/uploads/2022/03/shutterstock_1663988527-1-1024x682.jpg',
    price: 35,
    description: 'Drumsticks, also known as moringa pods, are long, slender vegetables from the moringa tree. They have a mild, slightly spicy flavor and are often used in soups, curries, and stews. Drumsticks are packed with vitamins, minerals, and antioxidants, contributing to overall health.'
  },
  {
    name: 'Bottle Gourd',
    image: 'https://farmhouse.com.pk/wp-content/uploads/2017/03/bottle-gourd.jpeg',
    price: 46,
    description: 'Bottle gourd, also known as lauki or calabash, is a mild-tasting vegetable that is often used in soups, curries, and stews. It has a light, watery texture and is low in calories, making it a great option for those seeking a healthy, hydrating food rich in vitamins and minerals.'
  },
  {
    name: 'Carrot',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71S6oQqVa5L._SL1500_.jpg',
    price: 35,
    description: 'Carrots are crunchy, sweet root vegetables, typically orange in color, though they also come in purple, red, yellow, and white varieties. Rich in beta-carotene, fiber, and vitamin A, carrots are versatile in both raw and cooked dishes and are often used in salads, stews, juices, and as a snack.'
  },
];

function Additems() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Add item to the cart
  const addToCart = (vegetable) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.name === vegetable.name);
      if (existingItem) {
        return prevCart.map(item =>
          item.name === vegetable.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...vegetable, quantity: 1 }];
      }
    });
  };

  // Navigate to payment page with updated cart
  const goToPayment = () => {
    navigate("/payment", { state: { cart } });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Vegetables</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        {vegetables.map((item, index) => {
          // Check if the item is in the cart
          const isInCart = cart.find(cartItem => cartItem.name === item.name);

          return (
            <div
              key={index}
              style={{
                display: isInCart ? "none" : "flex",  // Hide item only if it's in the cart
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "100%",
                maxWidth: "800px",
                padding: "20px",
                margin: "0 auto",
              }}
            >
              
              <div style={{ flex: "0 0 150px", paddingLeft: "20px", marginRight: "20px" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>

              <div style={{ flex: "1", paddingRight: "20px", textAlign: "left" }}>
                <h3 style={{ fontSize: "20px", color: "#333", marginBottom: "10px" }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: "14px", color: "#777", marginBottom: "10px" }}>
                  {item.description}
                </p>
                <p style={{ fontSize: "16px", color: "#333", fontWeight: "bold" }}>
                  ₹{item.price} per kg
                </p>

           
                <button
                  onClick={() => addToCart(item)}  // Add to cart
                  disabled={isInCart}  // Disable if the item is already in the cart
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginTop: "15px",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}

        
        <button
          onClick={goToPayment}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#FF5722",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default Additems;
