import React, { Component } from 'react'
import { Link } from "gatsby"
import '../../public/assets/css/misc.scss'
import DailyDesigns from '../../src/components/misc-components/dailydesigns'
import Graphics from '../../src/components/misc-components/graphics'
import Sketches from '../../src/components/misc-components/sketches'

class Misc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDaily: true,
            showGraphics: false,
            showSketches: false,
            showPhotography: false
        };
        this.showDaily = this.showDaily.bind(this);
        this.showGraphics = this.showGraphics.bind(this);
        this.showSketches = this.showSketches.bind(this);
        this.showPhotography = this.showPhotography.bind(this);

      }
    // function to handle the click
     showDaily() {
        this.setState({
            showDaily: true,
            showGraphics: false,
            showSketches: false,
            showPhotography: false
        });
    }
    
    showGraphics() {
        this.setState({
            showDaily: false,
            showGraphics: true,
            showSketches: false,
            showPhotography: false
        });
    }

    showSketches() {
        this.setState({
            showDaily: false,
            showGraphics: false,
            showSketches: true,
            showPhotography: false
        });
    }

    showPhotography() {
        this.setState({
            showDaily: false,
            showGraphics: false,
            showSketches: false,
            showPhotography: true
        });
    }

    render() {
      // Change the button color based on the state of the button
      let dailyState = this.state.showDaily ? "clicked-button" : "unclicked-button";
      let graphicsState = this.state.showGraphics ? "clicked-button" : "unclicked-button";
      let sketchesState = this.state.showSketches ? "clicked-button" : "unclicked-button";
      let photographyState = this.state.showPhotography ? "clicked-button" : "unclicked-button";

      return (
          <div className="misc-page">
              <Link to="/">Go Back</Link>
              <h3>MISCELLANEOUS</h3>
              <div className="all-buttons">
                <button onClick={this.showDaily} id={dailyState}>Daily Designs</button>
                <button onClick={this.showGraphics} id={graphicsState}>Graphics</button>
                <button onClick={this.showSketches} id={sketchesState}>Sketches</button>
                <button onClick={this.showPhotography} id={photographyState}>Photography</button>
             </div>

             <div class="misc-page-container">
                {this.state.showDaily && <DailyDesigns/>}
                {this.state.showGraphics && <Graphics/>}
                {this.state.showSketches && <Sketches/>}
             </div>


          </div>
      );
    }
  }
  // export the class so you can call it elsewhere
  export default Misc;
