"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './TemplateLayout1.module.css';

const TemplateLayout1 = () => {
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const contentSectionRef = useRef(null); // Reference for contentSection
  const headerContentRef = useRef(null); // Reference for headerContent
  const imageSectionRef = useRef(null); // Reference for imageSection
  const [visibleCards, setVisibleCards] = useState([false, false, false, false]);
  const [contentVisible, setContentVisible] = useState(false); // Track content section visibility
  const [headerVisible, setHeaderVisible] = useState(false); // Track header content visibility
  const [imageVisible, setImageVisible] = useState(false); // Track image section visibility

  const handleScroll = () => {
    cardRefs.forEach((ref, index) => {
      const card = ref.current;
      if (card) {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setVisibleCards((prev) => {
            const newVisibleCards = [...prev];
            newVisibleCards[index] = true;
            return newVisibleCards;
          });
        }
      }
    });
  };

  useEffect(() => {
    // Observer for contentSection
    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        setContentVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    // Observer for headerContent
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    // Observer for imageSection
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        setImageVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (contentSectionRef.current) {
      contentObserver.observe(contentSectionRef.current);
    }

    if (headerContentRef.current) {
      headerObserver.observe(headerContentRef.current);
    }

    if (imageSectionRef.current) {
      imageObserver.observe(imageSectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (contentSectionRef.current) {
        contentObserver.disconnect();
      }
      if (headerContentRef.current) {
        headerObserver.disconnect();
      }
      if (imageSectionRef.current) {
        imageObserver.disconnect();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={imageSectionRef}
        className={`${styles.imageSection} ${imageVisible ? styles.visible : styles.hidden}`}
      >
        <img
          src="/images/flightt.jpg" // Replace with your image path
          alt="Side Image"
          className={styles.image}
        />
      </div>

      <div
        ref={contentSectionRef}
        className={`${styles.contentSection} ${contentVisible ? styles.visible : styles.hidden}`}
      >
        <div
          ref={headerContentRef}
          className={`${styles.headerContent} ${headerVisible ? styles.visible : styles.hidden}`}
        >
          <h2>Flying Zone</h2>
          <p>Some description text goes here</p>
        </div>
        <div className={styles.cards}>
          {[1, 2, 3, 4].map((card, index) => (
            <div
              ref={cardRefs[index]}
              key={index}
              className={`${styles.card} ${visibleCards[index] ? styles.visible : ''}`}
            >
              <h3>Flight {card}</h3>

              <p>Flying is more than a sport and more than a job; flying is pure passion and desire, which fill a lifetime.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateLayout1;
