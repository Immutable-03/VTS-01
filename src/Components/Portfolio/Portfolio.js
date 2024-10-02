import React, { useEffect, useRef } from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible); // Remove class when leaving viewport
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const elements = portfolioRef.current.querySelectorAll(`.${styles.animateOnScroll}`);

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className={styles.portfolioContainer} ref={portfolioRef}>
      <div className={`${styles.project1Card} ${styles.animateOnScroll}`}>
        <img src="images/portfolioimg1.jpg" alt="Project1 Image" />
        <h3>Government Projects</h3>
        <ul>
          <li>Branded 10,000 Health and Wellness Centers with indoor signage, including sandwich
            boards.</li>
          <li>Enhanced 1,000 Primary Health Centers with comprehensive indoor branding solution</li>
          <li>Executed outdoor branding for 4,000 Y.S.R Village Clinics with front-lit boards.
          </li>
          <li>Supplied foam and vinyl boards for a 500,000 weaker section housing project,
            showcasing our ability to manage large-scale governmental initiatives.
          </li>
        </ul>
      </div>
      <div className={`${styles.project2Card} ${styles.animateOnScroll}`}>
        <img src="images/portfolioimg2.png" alt="Project2 Image" />
        <h3>Private Clients</h3>
        <ul>
          <li>Collaborated with numerous private companies across various industries. Our dedication
            to quality and timely delivery, combined with valuable client insights, has established us
            as a trusted partner. We consistently adapt to market trends and focus on improving our
            services.</li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
