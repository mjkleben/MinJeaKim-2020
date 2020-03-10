import React, { Component } from 'react'
import '../../public/assets/css/skills.scss'
// import ProfilePic from '../../public/assets/img/profile.png'
import AdobeLogo from '../../public/assets/img/adobe.svg'
import FigmaLogo from '../../public/assets/img/figma.svg'
import JavascriptLogo from '../../public/assets/img/javascript.svg'
import PythonLogo from '../../public/assets/img/python.svg'
import ContainerLogo from '../../public/assets/img/container.svg'
import ToolsLogo from '../../public/assets/img/tool.svg'

import ScrollAnimation from 'react-animate-on-scroll';


const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}><h3>SKILLS</h3></ScrollAnimation>

                <div className="skills-row">
                        <section className="development">
                            <h4>Development</h4>
                            <ul>
                                <li>
                                    <img src={JavascriptLogo} className="block"/>
                                    <p>Javascript: React, Vue, Gatsby, Node.js, Electron</p>
                                </li>
                                <li>
                                    <img src={PythonLogo} className="block"/>
                                    <p>Python: Django, Flask, Tkinter, Kivy</p>
                                </li>
                                <li>
                                    <img src={ContainerLogo} className="block"/>
                                    <p>Container Systems: Docker, Kubernetes</p>
                                </li>
                                <li>
                                    <img src={ToolsLogo} className="block"/>
                                    <p>Etc: PHP, Java,  HTML/CSS (SASS), AWS, WordPress, Arduino, Git, MongoDB, MySQL</p>
                                </li>
                            </ul>
                        </section>

                        <section className="design">
                            <h4>Design</h4>
                            <ul>
                                <li>
                                    <img src={FigmaLogo} className="block"/>
                                    <p>Figma</p>
                                </li>
                                <li>
                                    <img src={AdobeLogo} className="block"/>
                                    <p>Adobe Photoshop, Illustrator, XD</p>
                                </li>
                            </ul>
                        </section>
                </div>
            </div>
            
        </div>
    )
}

export default Skills
