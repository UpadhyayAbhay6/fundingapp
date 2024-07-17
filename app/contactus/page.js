import Script from 'next/script'
import React from 'react'
import Link from 'next/link'
const Contact = () => {
    
    return (
        
        <>
            <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
            <Script src="https://kit.fontawesome.com/de0298b466.js" crossorigin="anonymous"></Script>
            <Script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></Script>
            <Script src="https://smtpjs.com/v3/smtp.js"></Script>
            <div className="contactUs">
                <div className="titleContact">
                    <h2 className="m-auto text-5xl">Get in touch</h2>
                </div>

                <div className="contactbox">

                   



                    <div className="contact contact-info">
                        <h3>Contact Info</h3>

                        <div className="infoBox">
                            <div>
                                <span><ion-icon name="location"></ion-icon></span>
                                <p>Jagrati Vihar, Meerut <br />INDIA</p>
                            </div>
                            <div>
                                <span><ion-icon name="mail"></ion-icon></span>
                                <a href="mailto: abhay9412541844@gmail.com">abhay9412541844@gmail.com</a>

                            </div>

                            <div>
                                <span><ion-icon name="call"></ion-icon></span>
                                <a href="phone: +919389881323">+91 9389881323</a>
                                <span className="phn"><ion-icon name="call"></ion-icon></span>
                                <a href="phone: +919389801324">+91 9389801324</a>

                            </div>

                            <ul className="socialmedia">
                                <li><Link href="/"><ion-icon name="logo-google"></ion-icon></Link></li>
                                <li><Link href="#"><ion-icon name="logo-facebook"></ion-icon></Link></li>
                                <li><Link href="#"><ion-icon name="logo-instagram"></ion-icon></Link></li>
                                <li><Link href="#"><ion-icon name="logo-youtube"></ion-icon></Link></li>

                            </ul>
                        </div>
                    </div>


                    <div className="contact map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55858.8354006322!2d77.67842393798323!3d28.952467852086137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7b547a049da1%3A0x67af83d5bb11ff03!2sJagrati%20Vihar%2C%20Meerut%2C%20Uttar%20Pradesh%20250004!5e0!3m2!1sen!2sin!4v1713075304137!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
