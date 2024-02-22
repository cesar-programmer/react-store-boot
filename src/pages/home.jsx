import './home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Welcome to Organika</h1>
            <p>Organika is a place where you can find the best organic products for your health and wellness.</p>
            <p>Our mission is to support sustainable farming and to make organic living accessible to everyone.</p>
            <Link to="./catalog" className="btn btn-primary">Shop now</Link>
          </div>
          <div className="col-md-6">
            <img className='home-img' src={'/imgs/home.jpg'} alt="Organika" />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <h2>What Our Customers Say</h2>
            <p>"I've never felt better since I started using Organika products. They're truly life-changing!" - Someone</p>
          </div>
        </div>
      </div>
    </div>
  );
}
