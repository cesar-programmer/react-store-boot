import './products.css'
import QuantityPicker from './quantityPicker'

export default function Products({ product }) {
  return (
    <div className="products">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <h3>${product.price.toFixed(2)}</h3>
      <div className='total'>
        <p>Total:</p>
        <h4 className='total-amount'>23</h4>
      </div>
      <p>{product.category}</p>
      <QuantityPicker />
      <button className='btn btn-outline-secondary btn-sm button-add'>Add to cart</button>
    </div>
  )
}