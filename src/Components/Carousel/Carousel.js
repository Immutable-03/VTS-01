'use client';
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const slides = [
  { src: '/images/green.jpg', text: 'Lush Greenery ' },
  { src: '/images/bird.jpg', text: 'Birds in Flight' },
  { src: '/images/moon.jpg', text: 'Moonlit Sky' },
  { src: '/images/water.jpg', text: 'Serene Waters' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={`Slide ${index + 1}`}
            className={`${styles.image} ${currentIndex === index ? styles.active : ''}`}
          />
        ))}
      </div>
      <div className={`${styles.cardContainer} ${currentIndex % 2 === 0 ? styles.cardRight : styles.cardLeft}`}>
        <div className={`${styles.card}`}>
          <h2>{slides[currentIndex].text}</h2>
        </div>
      </div>
      <button className={`${styles.linkButton} ${currentIndex % 2 === 0 ? styles.buttonLeft : styles.buttonRight}`}>
        Know more &rarr;
      </button>

      <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevImage}>
        &#10094;
      </button>
      <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
