import React, { Component } from 'react'
import '../../public/assets/css/about.scss'
// import ProfilePic from '../../public/assets/img/profile.png'

import ScrollAnimation from 'react-animate-on-scroll';
import MusicNote from '../../public/assets/img/note.svg'
import Donut from '../../public/assets/img/donut.svg'
import Pencil from '../../public/assets/img/pencil.svg'
import Laptop from '../../public/assets/img/laptop.svg'
import Spanish from '../../public/assets/img/spanish.svg'
import Dumbbell from '../../public/assets/img/dumbbell.svg'


const About = () => {
    return (
        <div className="about-container">
            <section className="about">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.4}>
                    <div className="spin-animation">
                        <div className="center-logo"></div>
                        <div className="circle">
                            <img src={Dumbbell} className="hobby1"/>
                            <img src={Spanish} className="hobby2"/>
                            <img src={Laptop} className="hobby3"/>
                            <img src={Donut} className="hobby4"/>
                            <img src={Pencil} className="hobby5"/>
                            <img src={MusicNote} className="hobby6"/>
                        </div>
                    </div>
                    
                    {/* <img src={Hobbies} className="block"/> */}
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
