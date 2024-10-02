import React, { useRef } from 'react';
import styles from './Contact.module.css';
import Queryform from '../../common/Queryform';
import FindUsHere from '../../common/FindUsHere';
import useScrollAnimation from './useScrollAnimation';

const Contact = () => {
  const headTextRef = useRef(null);
  const subheadTextRef = useRef(null);
  const queryHeadRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);

  useScrollAnimation(headTextRef, styles.animateInFromTop);
  useScrollAnimation(subheadTextRef, styles.animateInFromBottom);
  useScrollAnimation(queryHeadRef, styles.animateInFromLeft);
  useScrollAnimation(formRef, styles.animateInFromBottom);
  useScrollAnimation(imageRef, styles.animateInFromRight);

  return (
    <div className={styles.connectcontainer}>
      {/* Heading Section */}
      <div className={styles.headtext} ref={headTextRef}>
        <div className={styles.head}>Connect</div>
        <div ref={subheadTextRef}>
          We are always excited to discuss your unique requirements that are not
          limited to our current offerings and wish to hear from you.
        </div>
      </div>

      {/* Query Container Section */}
      <div className={styles.queryconatainer}>
        <div className={styles.queryhead} ref={queryHeadRef}>
          <h4>Still have Queries?</h4>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <div className={styles.form} ref={formRef}>
              <Queryform />
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.image} ref={imageRef}></div>
            <div className={styles.imagebelowTxt}>
              <p>Can’t find what you’re looking for? Send us an email.</p>
              <div className="row">
                <div className="col-md-6">
                  <p>Commercial Printing</p>
                  <p><a href="mailto:commercial.sales@kalajyothi.com">commercial.sales@kalajyothi.com</a></p>
                  <p>Magazines and Bookwork</p>
                  <p><a href="mailto:magazine.sales@kalajyothi.com">magazine.sales@kalajyothi.com</a></p>
                  <p><a href="mailto:bookwork@kalajyothi.com">bookwork@kalajyothi.com</a></p>
                </div>
                <div className="col-md-6">
                  <p>Packaging</p>
                  <p><a href="mailto:box@kalajyothi.com">box@kalajyothi.com</a></p>
                  <p>Pharma print production</p>
                  <p><a href="mailto:pharma.sales@kalajyothi.com">pharma.sales@kalajyothi.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FindUsHere Component */}
      <FindUsHere />
    </div>
  );
};

export default Contact;
