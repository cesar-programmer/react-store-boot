import React, { createContext, useState, useEffect } from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(cart);
    totalAmout();
    console.log(total);
  }, [cart]);

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

  function totalAmout() {
    let total = 0;
    cart.forEach(item => {
      total += item.product.price * item.quantity;
    });
    setTotal(total);
    return total;
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clearCart,
      totalAmout,
      total
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
