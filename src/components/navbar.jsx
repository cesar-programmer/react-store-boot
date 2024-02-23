import './navbar.css'; // Asegúrate de personalizar este archivo CSS para tus necesidades
import { Link } from 'react-router-dom';
import ShoppingCar from './shoppingCar';
import { useContext } from 'react';
import CartContext from '../context';

export default function Navbar() {

  const context = useContext(CartContext);
  const cart = context.cart;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Organika</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">Catalog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          </ul>
          <i
            id='car'
            style={{color:'white', marginRight:'10px'}}
            className="bi bi-cart3"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
          <ShoppingCar />
          </i>
          <span className="badge bg-primary">{cart.length}</span>
        </div>
      </div>
    </nav>
  );
}
