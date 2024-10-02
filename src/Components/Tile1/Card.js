import React, { useEffect, useRef, useState } from 'react';
import styles from './Card.module.css'; // Import the CSS Module

const Card = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  const data = [
    {
      image: '/images/green.jpg',
      heading: 'Heading Text 1',
      body: [
        { text: 'Link 1', link: 'https://example.com/body1' },
        { text: 'Link 2', link: 'https://example.com/body2' },
      ],
    },
    {
      image: '/images/bird.jpg',
      heading: 'Heading Text 2',
      body: [
        { text: 'Link 3', link: 'https://example.com/body3' },
        { text: 'Link 4', link: 'https://example.com/body4' },
      ],
    },
    {
      image: '/images/moon.jpg',
      heading: 'Heading Text 3',
      body: [
        { text: 'Link 5', link: 'https://example.com/body5' },
        { text: 'Link 6', link: 'https://example.com/body6' },
      ],
    },
    {
      image: '/images/water.jpg',
      heading: 'Heading Text 4',
      body: [
        { text: 'Link 7', link: 'https://example.com/body7' },
        { text: 'Link 8', link: 'https://example.com/body8' },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 } // 10% of the element is visible
    );

    const textElement = textRef.current;
    if (textElement) {
      observer.observe(textElement);
    }

    return () => {
      if (textElement) {
        observer.unobserve(textElement);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={textRef}
        className={`${styles.leftContent} ${isVisible ? styles.visible : ''}`}
      >
        <h1>Crafting Excellence in Apparels, Printing, and Advertising</h1>
        <p style={{ fontSize: "22px" }}>
          Welcome to Amantra! We specialize in delivering high-quality products and services tailored to
          the apparel, printing, and advertising industries. Our commitment to excellence ensures that we
          meet and exceed your expectations through professionalism and innovation.
        </p>
      </div>
      <div className={styles.rightImages}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles.cardBackground}`}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className={styles.cardOverlay}>
              <h2 className={styles.cardHeading}>{item.heading}</h2>
              <div className={styles.cardBody}>
                {item.body.map((linkItem, linkIndex) => (
                  <p key={linkIndex}>
                    <a href={linkItem.link} target="_blank" rel="noopener noreferrer">
                      {linkItem.text}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
