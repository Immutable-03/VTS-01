import React from 'react'
import styles from './Card.module.css'

const Card = ({ data }) => {
    return (
        <div className={styles.cardWrapper}>
        <div className={styles.card} key={data.id}>
          <iframe 
            src={data.src} 
            width="100%" 
            height="250px" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <div className={styles.cardBody} style={{height:'270px'}}>
            <h5 className={styles.cardTitle}>{data.title}</h5>
            <p className={styles.cardText}>{data.address}</p>
            <h6 className={styles.cardInfo}>
              <i className="bi bi-telephone-fill" style={{ color: '#71c4ad', padding: '10px', fontSize: "18px" }}></i> 
              {data.phone}
            </h6>
            <h6 className={styles.cardInfo} >
              <i className="bi bi-envelope-fill" style={{ color: '#71c4ad', padding: '10px', fontSize: "18px", }}></i> 
              {data.email}
            </h6>
          </div>
        </div>
      </div>










        // <div >
        //     <div className="card h-100 m-3 mb-5 justify-content-center align-items-center border-2" key={data.id}>
        //         <iframe src={data.src} width="100%" height="350px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        //         <div className="card-body justify-content-center align-content-center" style={{ height: "250px" }}>
        //             <h5 className="card-title" style={{ color: '#71c4ad', textAlign: 'left', fontSize: '20px' }}>{data.title}</h5>
        //             <p className="card-text " style={{ fontSize: "14px", color: 'black' }}>{data.address}</p>
        //             <h6 style={{ fontSize: "14px", color: 'black' }}><i className="bi bi-telephone-fill" style={{ color: '#71c4ad', padding: '10px', fontSize: "18px" }}></i> {data.phone}</h6>
        //             <h6 style={{ textDecoration: 'underline', fontSize: "14px", color: 'black' }}><i className="bi bi-envelope-fill" style={{ color: '#71c4ad', padding: '10px', fontSize: "18px" }}></i> {data.email}</h6>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Card
