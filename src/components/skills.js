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

                <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.4}>
                    <h3>Design</h3>
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
                </ScrollAnimation>


                <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.4}>
                    <h3>Development</h3>
                    <ul>
                        <li>
                            <img src={JavascriptLogo} className="block"/>
                            <p>Javascript: React, Vue, Gatsby, Node.js</p>
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
                            <p>Etc: AWS, WordPress, HTML, CSS (SASS), Travis</p>
                        </li>
                    </ul>
                </ScrollAnimation>



            </div>
            
        </div>
    )
}

export default Skills
