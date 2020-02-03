import React, { Component } from 'react'
import '../../public/assets/css/skills.scss'
// import ProfilePic from '../../public/assets/img/profile.png'

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills">
                <h3>SKILLS</h3>

                <h3>Design</h3>
                <ul>
                    <li>
                        <div className="block"></div>
                        <p>Figma</p>
                    </li>
                    <li>
                        <div className="block"></div>
                        <p>Adobe Photoshop, Illustrator, XD</p>
                    </li>
                </ul>

                <h3>Development</h3>
                <ul>
                    <li>
                        <div className="block"></div>
                        <p>Javascript: React, Vue, Gatsby, Node.js</p>
                    </li>
                    <li>
                        <div className="block"></div>
                        <p>Python: Django, Flask, Tkinter, Kivy</p>
                    </li>
                    <li>
                        <div className="block"></div>
                        <p>Container Systems: Docker, Kubernetes</p>
                    </li>
                    <li>
                        <div className="block"></div>
                        <p>Etc: AWS, WordPress, HTML, CSS (SASS), Travis</p>
                    </li>
                </ul>


            </div>
            
        </div>
    )
}

export default Skills
