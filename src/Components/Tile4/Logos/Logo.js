
import React, { useState, useEffect } from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  // Replace these URLs with the actual paths to your logos
  const logos = [
    '/images/logo1.jpg',
    '/images/logo2.jpg',
    '/images/logo3.jpg',
    '/images/logo1.jpg',
    '/images/logo2.jpg',
    '/images/logo3.jpg',
    '/images/logo1.jpg',
    '/images/logo2.jpg',
    '/images/logo3.jpg',
    '/images/logo1.jpg',
    '/images/logo2.jpg',
    '/images/logo3.jpg',
    '/images/logo1.jpg',
    '/images/logo2.jpg',
    '/images/logo3.jpg',
    '/images/logo1.jpg',
    '/images/logo2.jpg',
    '/images/logo3.jpg',
    '/images/logo1.jpg',
    '/images/logo2.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const groupSize = 5; // Number of logos to show at once

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + groupSize < logos.length ? prevIndex + groupSize : 0
      );
    }, 5000); // Change group every 10 seconds

    return () => clearInterval(interval);
  }, [logos.length]);

  // Get the current group of 5 logos to display
  const getVisibleLogos = () => {
    return logos.slice(currentIndex, currentIndex + groupSize);
  };

  return (
    <div className={styles.scroller}>
      <div className={styles.scrollArea}>
        {getVisibleLogos().map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className={styles.logoImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Logo;
