import './quantityPicker.css'

export default function QuantityPicker({ quantity, onQuantityChange }) {

  function increase() {
    onQuantityChange(quantity + 1);
  }

  function decrease() {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  }

  return (
    <div className="quantity-picker">
      <button className='btn btn-primary btn-sm' disabled={quantity === 1} onClick={decrease}>-</button>
      <label>{quantity}</label>
      <button className='btn btn-primary btn-sm' onClick={increase}>+</button>
    </div>
  );
}
