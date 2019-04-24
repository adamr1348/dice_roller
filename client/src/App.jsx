import React, { Component } from "react";
import DiePic from "./DiePic.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: [4, 6, 8, 10, 12, 20]
    };
  }

  render() {
    return (
      <div>
        <div className="picHolder">
          {this.state.dice.map((item, index) => {
            return <DiePic size={item} location={index} key={index} />;
          })}
        </div>
      </div>
    );
  }
}
