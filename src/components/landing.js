import React, { Component } from 'react'
import '../../public/assets/css/landing.scss'
import ProfilePic from '../../public/assets/img/profile.png'
import RadialMenu from "react-radial-menu"

const LandingSection = () => {
    return (
        <div className="landing">
            <section className="landing-greeting">
                <div className="profile-border"><img  src={ProfilePic} alt="fireSpot"/></div>
                <div className="landing-intro">
                    <h1><span className="hand">👋</span> hi, i'm Min Jea</h1>
                    <h1>Software Developer {"\u0026"} </h1>
                    <h2>Designer</h2>
                </div>
            </section>

            <div className="mobile-footer">
                <RadialMenu
                    animation={"shrinkIn"}
                    distance ={30}
                    itemsSize ={55}
                    stagger={0}
                    items={[
                        {"href":"", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"},
                        {"href":"", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"},
                        {"href":"", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"},
                        {"href":"", "image":"url('')"},
                        {"href":"", "image":"url('')"},
                        {"href":"", "image":"url('')"},
                        {"href":"", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"},
                        {"href":"", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"}]
                    }
                    center={{"image": "url('/assets/img/logo.png')"}}
                />  
            </div>

            <div className="desktop-footer">
                    <ul>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Daily Designs</li>

                        
                    </ul>
                    
            </div>
        </div>


    )
}

export default LandingSection
