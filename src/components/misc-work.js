import React, { Component } from 'react'
import { Link } from "gatsby"
import '../../public/assets/css/misc-work.scss'

const MiscWork = () => {
    return (
        <div className="misc-container">
            <div className="misc">
                <h3>MISCELLANEOUS</h3>

                <div id="misc-card" className="graphic-designs">
                    <img src="../assets/img/misc/Graphics/cover.png"/>
                    <p>Daily Designs, Graphics, Sketches, Photography</p>
                    <div className="view-misc">
                        <p class="view-works"><Link to="/misc">VIEW WORKS</Link></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MiscWork
