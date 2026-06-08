import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid footer-container">
        <div className="footer-section">
          <h2 className="logo">MOVIEAPP</h2>
          <p>
            Unlimited movies, TV shows, and entertainment anytime anywhere.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>  
            <li><a href="#" as={Link}>Home</a></li>
            <li><a href="#" as={Link}>TV Shows</a></li>
            <li><a href="#" as={Link}>Movies</a></li>
            <li><a href="#" as={Link}>Favorites</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><a href="#" as={Link}>Action</a></li>
            <li><a href="#" as={Link}>Comedy</a></li>
            <li><a href="#" as={Link}>Horror</a></li>
            <li><a href="#" as={Link}>Romance</a></li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" as={Link}><i className="fab fa-facebook-f"></i></a>
            <a href="#" as={Link}><i className="fab fa-instagram"></i></a>
            <a href="#" as={Link}><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" as={Link}><i className="fab fa-youtube"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MOVIEAPP. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer