import React from 'react';
// import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { HashRouter as Router, useLocation } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => {
  const location = useLocation();

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.FooterConainer}>
      <div className='row'>
        <div className='col-md-6'>
          <div>
            <a href="#/terms"> Terms </a>
            <a href="#/privacy"> Privacy </a>
          </div>
          <div>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-envelope-fill"></i>
          </div>
        </div>
        <div className=' col-md-6'>
          <div className={styles.Nav}>
            <a href="#/" onClick={scrolltoTop} className={location.pathname === '/home' ? styles.active : ''}>Home</a>
            <a href="#/about" onClick={scrolltoTop} className={location.pathname === '/about' ? styles.active : ''}>About</a>
            <a href="#/services" onClick={scrolltoTop} className={location.pathname === '/services' ? styles.active : ''}>Services</a>
            <a href="#/portfolio" onClick={scrolltoTop} className={location.pathname === '/portfolio' ? styles.active : ''}>Portfolio</a>

            <a href="#/contact" onClick={scrolltoTop} className={location.pathname === '/contact' ? styles.active : ''}>Contact</a>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <span>© 2024 XXXXXX Private Limited | All rights reserved</span>
      </div>
    </div>
  );
};

export default function WrappedFooter() {
  return (
    <Router>
      <Footer />
    </Router>
  );
}
