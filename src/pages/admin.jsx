import './admin.css';
import { useState } from 'react';

export default function Admin() {
  const [product, setProduct] = useState({ title: '', category: '', price: '', image: '' });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  }

  function saveProduct(event) {
    event.preventDefault();
    console.log(product);
    clearForm();
  }

  function clearForm() {
    setProduct({ title: '', category: '', price: '', image: '' });
  }

  return (
    <div className="admin container">
      <h1>Store Management</h1>
      <form >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={product.title} onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" name="category" value={product.category} onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" id="price" name="price" value={product.price} onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="image" name="image" value={product.image} onChange={handleInputChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={saveProduct}>Submit</button>
      </form>
    </div>
  );
}
