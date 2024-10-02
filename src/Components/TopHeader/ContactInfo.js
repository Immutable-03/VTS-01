// components/ContactInfo.js
'use client';
import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contactHeader}>
                <div className={styles.contactItem}>
                    <i className="bi bi-telephone-fill"></i>
                    <a href="tel:+1234567890" className={styles.link}>+1 (234) 567-890</a>
                </div>
                <div className={styles.contactItem}>
                    <i className="bi bi-envelope-fill"></i>
                    <a href="mailto:info@example.com" className={styles.link}>info@example.com</a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
