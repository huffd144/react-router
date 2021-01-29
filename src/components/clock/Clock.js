import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div clasName="Clock">
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
