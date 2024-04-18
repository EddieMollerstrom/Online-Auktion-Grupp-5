import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { loadStripe } from '@stripe/stripe-js';

// Define actions for the reducer
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_ITEM_AMOUNT = 'UPDATE_ITEM_AMOUNT';

// Cart reducer function for managing cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the item is already in the cart and update the quantity if so
      const existingCartItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingCartItemIndex !== -1) {
        const newState = [...state];
        newState[existingCartItemIndex].amount += action.payload.amount;
        return newState;
      }
      // Item is not in the cart, add as new item
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    case UPDATE_ITEM_AMOUNT:
      return state.map(item =>
        item.id === action.payload.id ? { ...item, amount: action.payload.newAmount } : item
      );
    default:
      return state;
  }
};

// Initial cart state (this can be empty if using useEffect to fetch)
const initialCartState = [];

// Create the cart context with a default value
const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateItemAmount: () => {},
  checkout: () => {},
  totalPrice: 0,
});

// CartProvider component that provides the cart context to children
const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    // Function to fetch initial cart state from an API
    const fetchCartItems = async () => {
      try {
        const response = await fetch('/api/cart-items');
        const initialCartItems = await response.json();
        initialCartItems.forEach(item => {
          dispatch({ type: ADD_TO_CART, payload: item });
        });
      } catch (error) {
        console.error('Failed to fetch cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  // Function to dispatch add to cart action
  const addToCart = item => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  // Function to dispatch remove from cart action
  const removeFromCart = itemId => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };

  // Function to dispatch update item amount action
  const updateItemAmount = (itemId, newAmount) => {
    dispatch({ type: UPDATE_ITEM_AMOUNT, payload: { id: itemId, newAmount } });
  };

  // Checkout function initiates the process for Stripe payment
  const checkout = async () => {
    const stripe = await loadStripe('your-public-stripe-key'); // Replace with your actual publishable Stripe key
    // Fetch a session for the current cart state
    const response = await fetch('/rest/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartItems })
    });
    const result = await response.json();
    // Redirect the customer to the Stripe hosted checkout page
    await stripe.redirectToCheckout({ sessionId: result.id });
  };



    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemAmount, checkout }}>
            <div className="flex justify-center my-10 space-x-10">
                <div className="bg-green-800 text-white p-6 rounded-lg w-1/4">
                    <h2 className="text-2xl mb-6">Din Varukorg</h2>
                    <div className="mb-4">
                        <h3 className="text-lg">Totalt:</h3>
                        <p className="text-4xl">{cartItems.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(2)} KR</p>
                    </div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between my-4">
                            <div className="flex items-center">
                                <img src={item.image} alt={item.title} className="w-12 h-12 mr-2"/>
                                <p>{item.title}</p>
                            </div>
                            <div>
                                <p>{item.price.toFixed(2)} KR</p>
                                <p>{item.amount} ST</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="bg-white shadow-md rounded-lg p-6 w-1/4">
                    <h2 className="text-2xl mb-6">Betala Med Kort</h2>
                    {/* Payment form elements go here */}
                </div>
            </div>
            {children}
        </CartContext.Provider>
    );
};

// PropTypes for CartProvider
CartProvider.propTypes = {
    children: PropTypes.node.isRequired
  };
  
  export { CartProvider, CartContext };
export { CartProvider, CartContext };
