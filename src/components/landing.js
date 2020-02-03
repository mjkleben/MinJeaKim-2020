import React, { Component } from 'react'
import '../../public/assets/css/landing.scss'
import ProfilePic from '../../public/assets/img/profile.png'
import Logo from '../../public/assets/img/logo.png'

import RadialMenu from "react-radial-menu"

// import RadialMenu from './circlemenu'

const LandingSection = () => {
    return (
        <div className="landing">
            <section className="landing-greeting">
                <img  src={ProfilePic} alt="fireSpot"/>
                <h1>👋 hi, i'm Min Jea</h1>
                <h1>Software Developer {"\u0026"} </h1>
                <h2>Designer</h2>
            </section>

            <div className="landing-button">
                <p>let's get connected.</p>
                <RadialMenu
                animation={"shrinkIn"}
                distance ={35}
                itemsSize ={75}
                stagger={0}
                    items={[
                        {"href":"http://www.facebook.com", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"},
                        {"href":"http://www.facebook.com", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"},
                        {"href":"http://www.facebook.com", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"},
                        {"href":"", "image":"url('')"},
                        {"href":"", "image":"url('')"},
                        {"href":"", "image":"url('')"},
                        {"href":"http://www.facebook.com", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"},
                        {"href":"http://www.facebook.com", "image":"url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"}]

                    }
                    center={{"image": "url('https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png')"}
                }
                />            
        </div>
            
        </div>
    )
}

export default LandingSection
