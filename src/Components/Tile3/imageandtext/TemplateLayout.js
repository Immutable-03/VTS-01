"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './TemplateLayout.module.css'; // Import the CSS module

const TemplateLayout = () => {
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const headerRef = useRef(null); // Reference for the header
  const contentSectionRef = useRef(null); // Reference for the content section
  const imageSectionRef = useRef(null); // Reference for the image section
  const [visibleCards, setVisibleCards] = useState([false, false, false, false]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false); // State for image section visibility

  useEffect(() => {
    // Intersection observer for the header
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    // Intersection observer for the content section
    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        setContentVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    // Intersection observer for the image section
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        setImageVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (contentSectionRef.current) {
      contentObserver.observe(contentSectionRef.current);
    }

    if (imageSectionRef.current) {
      imageObserver.observe(imageSectionRef.current);
    }

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

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      headerObserver.disconnect(); // Clean up the observer for the header
      contentObserver.disconnect(); // Clean up the observer for the content section
      imageObserver.disconnect(); // Clean up the observer for the image section
    };
  }, []);

  return (
    <div>
      <div
        ref={headerRef}
        className={`${styles.headerContent} ${headerVisible ? styles.visible : styles.hidden}`}
      >
        <h2>Header Title</h2>
        <p>Some description text goes here</p>
      </div>

      <div className={styles.container}>
        <div
          ref={imageSectionRef}
          className={`${styles.imageSection} ${imageVisible ? styles.visible : styles.hidden}`}
        >
          <img
            src="/images/butterfly.jpg" // Replace with your image path
            alt="Side Image"
            className={styles.image}
          />
        </div>

        <div
          ref={contentSectionRef}
          className={`${styles.contentSection} ${contentVisible ? styles.visible : styles.hidden}`}
        >
          <div className={styles.cards}>
            {[1, 2, 3, 4].map((card, index) => (
              <div
                ref={cardRefs[index]}
                key={index}
                className={`${styles.card} ${visibleCards[index] ? styles.visible : ''}`}
              >
                {card === 1 && (
                  <>
                    <h3><b>Apparels</b></h3>
                    <p className={styles.dotted}>
                      <ul>
                        <li>Hospital & Doctor Aprons</li>
                        <li>Security Uniforms</li>
                        <li>Printed Bedsheets & Towels</li>
                        <li>Receptionist Printed Sarees</li>
                        <li>Face Masks & PPE Kits</li>
                      </ul>
                    </p>
                  </>
                )}
                {card === 2 && (
                  <>
                    <h3><b>Printing</b></h3>
                    <p className={styles.dotted}>
                      <ul>
                        <li>Hospital Files & Case Sheets</li>
                        <li>Printed Pharma Covers & Bags</li>
                        <li>Flyers, Brochures, & Calendars</li>
                        <li>Customized Diaries & Stickers</li>
                        <li>Holograms & Security Certificates</li>
                      </ul>
                    </p>
                  </>
                )}
                {card === 3 && (
                  <>
                    <h3><b>Advertising</b></h3>
                    <p className={styles.dotted}>
                      <ul>
                        <li>Indoor: Vinyl Posters, Sandwich Boards, LED Displays</li>
                        <li>Outdoor: Hoardings, Wall Posters, Digital Signage</li>
                      </ul>
                    </p>
                  </>
                )}
                {card === 4 && (
                  <>
                    <h3><b>Hologram Security Printing</b></h3>
                    <p className={styles.dotted}>
                      <ul>
                        <li>Unique Patterns & Dynamic Effects</li>
                        <li>Tamper-Evident Materials</li>
                        <li>Custom Designs</li>
                      </ul>
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateLayout;
