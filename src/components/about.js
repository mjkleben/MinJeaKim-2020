import React, { Component } from 'react'
import '../../public/assets/css/about.scss'
// import ProfilePic from '../../public/assets/img/profile.png'

import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
    return (
        <div className="about-container">
            <section className="about">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.4}>
                    <div className="block"></div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.4}>
                    <h3>ABOUT ME</h3>
                    <p>Raised by a pen and brush, surrounded by musical notes since birth, and born to eat donuts. </p>
                    <p>When you don’t catch me coding or designing, you’ll probably see my playing an instrument, weightlifting, or learning a foreign language. I take it upon myself to keep up with current tech and to always improve myself, as my motto is “Love to learn, learn to love.”</p>
                </ScrollAnimation>
            </section>

            
        </div>
    )
}

export default About
