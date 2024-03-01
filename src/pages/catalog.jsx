import './catalog.css'
import Products from '../components/products'
import { useEffect, useState } from 'react'
import DataService from '../services/dataService'

export default function Catalog() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    loadProducts()
  }, [])

  async function loadProducts() {
    const service = DataService.getInstance();
    const products = await service.getProducts()
    setProducts(products)

  }


  return (
    <div className="catalog">
      <h1>Look my awesome {products.length} products</h1>
      {products.map((prod) => {
        return <Products product={prod} key={prod.id} />
      })}
    </div>
  )
}