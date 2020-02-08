import React, { Component } from 'react'
import '../../public/assets/css/contact.scss'
// import ProfilePic from '../../public/assets/img/profile.png'
import LinkedInLogo from '../../public/assets/img/linkedin.svg'
import InstagramLogo from '../../public/assets/img/instagram.svg'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact">
                <h3>GET IN TOUCH</h3>
                <p>Want your idea to come to life? Shoot me an email and we can talk over coffee.</p>
                <p className="email">mjkleben@gmail.com</p>

                <ul>
                    <img src={LinkedInLogo} className="block"></img>
                    <img src={InstagramLogo} className="block"></img>
                </ul>
            </div>
            
        </div>
    )
}

export default Contact
