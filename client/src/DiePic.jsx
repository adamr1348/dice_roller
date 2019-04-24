import React, { Component } from "react";

export default class DiePic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [
        "https://s3.us-east-2.amazonaws.com/dicepics/d4.png",
        "https://s3.us-east-2.amazonaws.com/dicepics/d6.png",
        "https://s3.us-east-2.amazonaws.com/dicepics/d8.png",
        "https://s3.us-east-2.amazonaws.com/dicepics/d10.png",
        "https://s3.us-east-2.amazonaws.com/dicepics/d12.png",
        "https://s3.us-east-2.amazonaws.com/dicepics/d20.png"
      ],
      count: 1,
      size: this.props.size
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      count: e.target.value
    });
  }

  handleClick() {
    var total = 0;
    var string = "";
    for (var x = 0; x < this.state.count; x++) {
      var roll = Math.floor(Math.random() * this.state.size) + 1;
      total += roll;
      string += roll + " + ";
      if (x === this.state.count - 1) {
        string = string.slice(0, string.length - 2) + "= " + total;
      }
    }
    window.alert("You rolled \n" + string);
  }

  render() {
    return (
      <div className="dieContainer">
        <img src={this.state.pics[this.props.location]} className="diePic" />
        <input
          type="number"
          min="1"
          max="10"
          value={this.state.count}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Roll!</button>
      </div>
    );
  }
}
