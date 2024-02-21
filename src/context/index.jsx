import React, { createContext, useState, useEffect } from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]); // Este efecto se ejecutará cada vez que el carrito cambie

  function addItem(product, quantity) {
    setCart(currentCart => {
      const item = { product, quantity };
      return [...currentCart, item];
    });
  }

  function removeItem(product) {
    let tempCart = cart.filter(item => item.product.id !== product.id);
    setCart(tempCart);
  }

  function clearCart() {
    setCart([]);
  }


  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
