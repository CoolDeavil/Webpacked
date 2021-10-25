
import styles from '../scss/flip3d.scss';
// import styles from '../scss/box.scss';

import React, { Component } from "react";


export class App extends Component  {

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({favoritecolor: "yellow"})
    // }, 1000)

    console.log("React Component Mounted");
  }

    render() {
        return (<div className="flip3D">
        <div className="back">
          <div >
            <div>
              <h1>React Component</h1>
              <a href="https://reactjs.org/" target="__BLANCK">A JavaScript library for building user interfaces</a>
            </div>
          </div>
        </div>
        <div className="front">
          <img src="images/react_logo.png" className="mIcon"/>
        </div>
      </div>)
      }
     
}

export default App;
