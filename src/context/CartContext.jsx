import React, { createContext, useContext, useState } from "react";
import '../App.css';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addItem = (producto, quantity) => {
    const exist = cart.find(item => item.id === producto.id);
    if (exist) {
      
      setCart(
        cart.map(item =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...producto, quantity }]);
    }
  };

  
  const isInCart = (id) => cart.some(item => item.id === id);

  
  const clear = () => setCart([]);

  
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  
  const totalUnits = cart.reduce((total, item) => total + item.quantity, 0);

  
  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * item.precio,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isInCart,
        clear,
        removeItem,
        totalUnits,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
