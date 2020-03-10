import React, { Component } from 'react'
import { Link } from "gatsby"
import '../../public/assets/css/misc.scss'
import DailyDesigns from '../../src/components/misc-components/dailydesigns'
import Graphics from '../../src/components/misc-components/graphics'

class Misc extends Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.handleClick = this.handleClick.bind(this);
      }
    // function to handle the click
     handleClick() {
      this.setState(prevState => ({
        showModal: !prevState.showModal
      }));
    }
    
    // the render() method to put stuff into the DOM
    render() {
      // the modal you will toggle on and off
      const modal = (
        <div className="modal">
          Hello, my name is Godzilla
        </div>
      );
      
      return (
          <div className="about">
              <h3>MISCELLANEOUS</h3>
              <div className="all-buttons">
                <button id="daily-button">Daily Designs</button>
                <button id="graphics-button">Graphics</button>
                <button id="sketches-button">Sketches</button>
                <button id="photography-button">Photography</button>
             </div>

             <DailyDesigns/>
             <Graphics/>

          </div>
      );
    }
  }
  // export the class so you can call it elsewhere
  export default Misc;
