import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Services from '../Services';
import Portfolio from '../Portfolio/Portfolio';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <HashRouter>
      <LocationAwareNavbar menuOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </HashRouter>
  );
};

const LocationAwareNavbar = ({ menuOpen, toggleMenu, closeMenu }) => {
  const location = useLocation();

  return (
    <div>
      <header className={`${styles.header} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.logoContainer}>
          <a href="#/home" onClick={closeMenu}>
            <img src="/images/logo3.jpg" alt="vts" className={styles.logoImage} />
          </a>
        </div>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {menuOpen ? (
            <span className={styles.closeIcon}>&times;</span>
          ) : (
            <span className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          )}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {/* <a
            href="#/home"
            onClick={closeMenu}
            className={location.pathname === '/home' ? styles.active : ''}
          >
            Home
          </a> */}
          <a
            href="#/about"
            onClick={closeMenu}
            className={location.pathname === '/about' ? styles.active : ''}
          >
           About Amantra
          </a>
          <a
            href="#/services"
            onClick={closeMenu}
            className={location.pathname === '/services' ? styles.active : ''}
          >
            Services
          </a>
          <a
            href="#/portfolio"
            onClick={closeMenu}
            className={location.pathname === '/portfolio' ? styles.active : ''}
          >
            Portfolio
          </a>
          <a
            href="#/contact"
            onClick={closeMenu}
            className={location.pathname === '/contact' ? styles.active : ''}
          >
            Contact
          </a>
        </nav>
      </header>

    </div>
  );
};

export default Navbar;
