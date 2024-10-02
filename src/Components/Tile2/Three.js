'use client';
import React, { useEffect, useRef, useState } from 'react'; 
import styles from './Three.module.css'; // Import the styles

const Three = () => {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);
    const [activeIndices, setActiveIndices] = useState([0, 0, 0]);
    const carousels = [
        ['images/moon.jpg', 'images/green.jpg', 'images/water.jpg'],
        ['images/bird.jpg', 'images/birdd.jpg', 'images/inter.jpg'],
        ['images/flightt.jpg', 'images/moon.jpg', 'images/bird.jpg'],
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

    useEffect(() => {
        // Set an interval for image carousel
        const interval = setInterval(() => {
            setActiveIndices(prevIndices =>
                prevIndices.map((index, carouselIndex) => (index + 1) % carousels[carouselIndex].length)
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div
                ref={textRef}
                className={`${styles.visibleText} ${isVisible ? styles.visible : ''}`}
            >
                <p>
                    Amantra is your trusted partner in providing comprehensive solutions across various sectors.
                    We focus on quality and customer satisfaction, successfully managing projects for both
                    government and private clients. Our dedicated team is committed to understanding your unique
                    needs and delivering timely results.
                </p>
            </div>

            {carousels.map((carousel, index) => (
                <div className={styles.carousel} key={index}>
                    <div className={styles.carouselInner}>
                        {carousel.map((image, idx) => (
                            <div
                                className={`${styles.carouselItem} ${activeIndices[index] === idx ? styles.active : ''}`}
                                key={idx}
                            >
                                <img src={image} alt={`Slide ${idx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Three;
