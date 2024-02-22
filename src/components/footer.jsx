import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light pt-3 pb-3">
      <div className="container text-center">
        <p>Organika is a very expensive store that sells tech bamboo products.</p>
        <div>
          <Link to="/about" className="text-light mx-2">About us</Link>
          <Link to="/about" className="text-light mx-2">Contact</Link>
          <Link to="/privacy" className="text-light mx-2">Privacy</Link>
        </div>
        <div className="social-icons mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
