import React from 'react'
import styles from './FindUsHere.module.css'
import Card from './Card'

const FindUsHere = () => {
    const data=[
        {
            "id":1,
            "src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1067676185035!2d78.496535!3d17.4066631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99eabfddae33%3A0xdceab9d79571a320!2sNo%201%2C%201%2F0575%2C%20RTC%20X%20Rd%2C%20Vivek%20nagar%2C%20Himayatnagar%2C%20Hyderabad%2C%20Telangana%20500020!5e0!3m2!1sen!2sin!4v1726901000882!5m2!1sen!2sin",
            "title":"Head Office and Commercial printing division",
            "address":"1-1-60/5, R.T.C. cross roads, Musheerabad, Hyderabad – 500020, Telangana.",
            "phone":"+91-4027645536",
            "email":"info@kalajyothi.com"
        },
        {
            "id":2,
            "src":"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d487834.431535674!2d78.502763!3d17.208769!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDEyJzMxLjYiTiA3OMKwMzAnMTAuMCJF!5e0!3m2!1sen!2sus!4v1726901152798!5m2!1sen!2sus" ,
            "title":"Publishing, Packaging and Pharma print manufacturing",
            "address":"Plot No : CFC-1 and 2, Survey No: 18, E-City, SEZ, General industrial park, Raviryal & Srinagar village, Maheswaram mandal, Rangareddy district-501359, Telangana.",
            "phone":"+91-4029999009",
            "email":"info@kalajyothi.com"
        },
        {
            "id":3,
            "src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15306.593102314275!2d80.39102862561754!3d16.442680131280394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358cf7df09d085%3A0xcef84100073d43d7!2sNidumukkala%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1726901322535!5m2!1sen!2sus",
            "title":"Newspaper and Bookwork production",
            "address":"Survey No.94-B, C and D, Tadikonda mandal, Nidumukkala village, Guntur – 522016, Andhra Pradesh.",
            "phone":"+91-7893212111",
            "email":"info@kalajyothi.com"
        }
    ]
    
    return (
        <div className={styles.finduscontainer}>
            <div className={styles.heading}>
                <p >Find Us Here!</p>
            </div>
            
            <div className='row justify-content-center'>
                {
                        data.map((obj,i)=>{
                            return(
                              <div key={i} className='col-md-4 '>
                                <Card data={obj} />
                              </div>  
                            )
                        })
                }
            </div>
        </div>
    )
}

export default FindUsHere
