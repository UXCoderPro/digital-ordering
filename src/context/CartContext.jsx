import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [highlightedProductId, setHighlightedProductId] = useState(null);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (i) =>
          i.id === item.id &&
          JSON.stringify(i.selectedModifiers || {}) ===
            JSON.stringify(item.selectedModifiers || {}) &&
          JSON.stringify(i.selectedCombos || {}) ===
            JSON.stringify(item.selectedCombos || {})
      );

      if (existingIndex !== -1) {
        // If the same variant exists, increase its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += item.quantity;
        return updatedCart;
      }

      // Otherwise, add as a new cart item
      return [...prevCart, item];
    });

    setHighlightedProductId(item.id);
  };

  const clearCart = () => setCart([]);

  const updateCartQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      const id = parseInt(productId);

      if (newQuantity <= 0) {
        return prevCart.filter((item) => item.id !== id);
      }

      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const getProductQuantity = (productId) => {
    const item = cart.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        highlightedProductId,
        setHighlightedProductId,
        getProductQuantity,
        updateCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
