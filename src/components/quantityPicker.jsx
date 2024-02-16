import './quantityPicker.css'
import { useState } from 'react';

export default function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    setQuantity(quantity + 1);
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }


  return (
    <div className="quantity-picker">
      <button className ='btn btn-primary btn-sm' disabled = {quantity === 1} onClick={decrease}>-</button>
      <label>{quantity}</label>
      <button className ='btn btn-primary btn-sm'onClick={increase}>+</button>
    </div>
  )
}