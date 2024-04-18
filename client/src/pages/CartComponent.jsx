import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartComponent = () => {
    const { cartItems, checkout } = useContext(CartContext);
  
    return (
      <div>
        <h2>Cart</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} /> {/* Include this if you want to display images */}
              {item.title} - Quantity: {item.amount} - Price: ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <button onClick={checkout}>Checkout</button>
      </div>
    );
  };

export default CartComponent;
