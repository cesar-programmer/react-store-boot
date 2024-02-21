import './products.css'
import QuantityPicker from './quantityPicker'
import React, { useState, useContext } from 'react';
import CartContext from '../context'


export default function Products({ product }) {

  const context = useContext(CartContext);


  const [quantity, setQuantity] = useState(1);

  function onQuantityChange(quantity) {
    setQuantity(quantity);
  }

  return (
    <div className="products">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>${product.price.toFixed(2)}</h3>
      <div className='total'>
        <p>Total:</p>
        <h4 className='total-amount'>${(quantity * product.price).toFixed(2)}</h4>
      </div>
      <p className='category'>{product.category}</p>
      <QuantityPicker onQuantityChange={onQuantityChange}/>
      <button className='btn btn-outline-secondary btn-sm button-add' onClick={() => {
        context.addItem(product, quantity);
        setQuantity(1);
      }}>Add to cart</button>
    </div>
  )
}