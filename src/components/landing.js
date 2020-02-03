import React, { Component } from 'react'
import '../../public/assets/css/landing.scss'
import ProfilePic from '../../public/assets/img/profile.png'

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
            </div>
        </div>
    )
}

export default LandingSection
