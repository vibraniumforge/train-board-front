import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
        .toLocaleString("en-US", {
          timeZone: this.props.timeZone
        })
        .split(", ")[1],
      time24h: new Date()
        .toLocaleString("en-GB", {
          timeZone: this.props.timeZone
        })
        .split(", ")[1]
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    let time = new Date()
      .toLocaleString("en-US", {
        timeZone: this.props.timeZone
      })
      .split(", ")[1];
    let time24 = new Date()
      .toLocaleString("en-GB", {
        timeZone: this.props.timeZone
      })
      .split(", ")[1];
    this.setState({
      time: time,
      time24h: time24
    });
  }

  render() {
    return (
      <React.Fragment>
        <tr>
          <th colSpan="2">{this.state.time}</th>
          <th />
          <th colSpan="3">{this.props.stationName}</th>
          <th />
          <th colSpan="2">{this.state.time24h}</th>
        </tr>
      </React.Fragment>
    );
  }
}

export default Time;
