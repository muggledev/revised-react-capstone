import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="navbar">
        <div className="brand">
          <i className="fa-solid fa-cake-candles"></i>
          <span className="brand-name">Sprinkle & Whisk</span>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={isMenuOpen ? "nav open" : "nav"}>
          <div className="nav-label">
            <Link to="/" onClick={toggleMenu}>
              HOME
            </Link>
          </div>
          <div className="nav-label">
            <Link to="/products" onClick={toggleMenu}>
              PRODUCTS
            </Link>
          </div>
          <div className="nav-label">
            <Link to="/cart" onClick={toggleMenu}>
              CART
            </Link>
          </div>
          <div className="nav-label">
            <Link to="/contact" onClick={toggleMenu}>
              CONTACT
            </Link>
          </div>
          <div className="nav-label">
            <Link to="/about" onClick={toggleMenu}>
              ABOUT
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
