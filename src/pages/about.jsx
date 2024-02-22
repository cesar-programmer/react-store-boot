import './about.css';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>About Organika</h1>
            <p>Organika is dedicated to bringing you the best organic products for your health and wellness. Founded in [año], our mission is to support sustainable farming and to make organic living accessible to everyone.</p>
            <p>Discover the story behind our passion for organic products and learn how we're making a difference.</p>
            <div className="contact-info">
              <p><i className="bi bi-envelope-fill"></i> email@example.com</p>
              <p><i className="bi bi-telephone-fill"></i> +1234567890</p>
              <p><i className="bi bi-geo-alt-fill"></i> 123 Organika Street, City</p>
            </div>
            <Link to="/" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
