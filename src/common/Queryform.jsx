import React, { useState } from 'react'
import styles from './Queryform.module.css'
const Queryform = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        dropdown1: '',
        dropdown2: '',
        address: '',
        helpMessage: '',
    });

    const [errors, setErrors] = useState({});

    // Handle form change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form validation
    const validate = () => {
        let formErrors = {};

        if (!formData.fullName.trim()) {
            formErrors.fullName = 'Full Name is required';
        }

        if (!formData.companyName.trim()) {
            formErrors.companyName = 'Company Name is required';
        }

        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'A valid email address is required';
        }

        if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = 'A valid 10-digit phone number is required';
        }

        if (!formData.dropdown1) {
            formErrors.dropdown1 = 'Please select an option';
        }

        if (!formData.dropdown2) {
            formErrors.dropdown2 = 'Please select an option';
        }

        if (!formData.address.trim()) {
            formErrors.address = 'Address is required';
        }

        if (!formData.helpMessage.trim()) {
            formErrors.helpMessage = 'Please specify how we can help';
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted', formData);
            // Handle form submission (e.g., send the data to a server)
        }
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="First Name & Last Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? styles.errorInput : ''}
                />
                {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
            </div>

            {/* Company Name */}
            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={errors.companyName ? styles.errorInput : ''}
                />
                {errors.companyName && <span className={styles.error}>{errors.companyName}</span>}
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.errorInput : ''}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            {/* Phone Number */}
            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? styles.errorInput : ''}
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>

            {/* Dropdown 1 */}
            <div className={styles.formGroup}>
                <select
                    name="dropdown1"
                    value={formData.dropdown1}
                    onChange={handleChange}
                    className={errors.dropdown1 ? styles.errorInput : ''}
                >
                    <option value="">Select a bussiness verticle</option>
                    <option value="Commercial Printing">Commercial Printing</option>
                    <option value="Packaging">Packaging</option>
                    <option value="Magazine">Magazine</option>
                    <option value="Bookwork">Bookwork</option>
                    <option value="Pharam Print Production">Pharam Print Production</option>
                    <option value="All">All</option>
                </select>
                {errors.dropdown1 && <span className={styles.error}>{errors.dropdown1}</span>}
            </div>

            {/* Dropdown 2 */}
            <div className={styles.formGroup}>
                <select
                    name="dropdown2"
                    value={formData.dropdown2}
                    
                    onChange={handleChange}
                    className={errors.dropdown2 ? styles.errorInput : ''}
                >
                    <option value="">Better time to teach U?</option>
                    <option value="Morining 9AM-12PM">Morining 9AM-12PM</option>
                    <option value="Afternoon 12PM-3PM">Afternoon 12PM-3PM</option>
                    <option value="Afternoon 5PM-5PM">Afternoon 5PM-5PM</option>
                    
                </select>
                {errors.dropdown2 && <span className={styles.error}>{errors.dropdown2}</span>}
            </div>

            {/* Address */}
            <div className={styles.formGroup}>
                <textarea
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? styles.errorInput : ''}
                />
                {errors.address && <span className={styles.error}>{errors.address}</span>}
            </div>

            {/* How Can We Help */}
            <div className={styles.formGroup}>
                <textarea
                    name="helpMessage"
                    placeholder="How can we help you?"
                    value={formData.helpMessage}
                    onChange={handleChange}
                    className={errors.helpMessage ? styles.errorInput : ''}
                />
                {errors.helpMessage && <span className={styles.error}>{errors.helpMessage}</span>}
            </div>

            <button type="submit" className={styles.submitBtn}>
                SEND QUERY
            </button>
        </form>
    )
}

export default Queryform
