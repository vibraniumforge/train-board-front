import React, { Component } from "react";

import { serviceHelper } from "../helpers/serviceHelper";
import { remarksHelper } from "../helpers/remarksHelper";
import { timeHelper } from "../helpers/timeHelper";
import { stationHelper } from "../helpers/stationHelper";

import Time from "./Time";

class AmtrakSearchBoard extends Component {
  componentDidMount() {
    this.interval1 = setInterval(() => this.blink(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval1);
  }

  blink() {
    const boardingTrains = document.getElementsByClassName("boarding");
    if (boardingTrains.length > 0) {
      Array.from(boardingTrains).forEach(train => {
        train.classList.toggle("hidden");
      });
    }
  }

  render() {
    const trainsInfo =
      this.props.amtrakTrains &&
      this.props.amtrakTrains !== [] &&
      this.props.amtrakTrains.map((train, index) => {
        return train.trainno.trim() ? (
          <tr key={index}>
            <td>{train.trainno}</td>
            <td>{serviceHelper(train.service)}</td>
            <td>{stationHelper(train.destination)}</td>
            <td>{stationHelper(train.origin)}</td>
            <td>{timeHelper(train.scheduled)}</td>
            <td>{timeHelper(train.scheduled24)}</td>
            <td>{timeHelper(train.newtime)}</td>
            <td>{timeHelper(train.newtime24)}</td>

            <td className={remarksHelper(train.remarks_boarding)}>
              {serviceHelper(train.remarks_boarding)}
            </td>
          </tr>
        ) : null;
      });

    return (
      <React.Fragment>
        <table>
          <thead>
            <Time stationName={this.props.stationName} />
            <tr>
              <th>Train Number</th>
              <th>Train Name</th>
              <th>Destination</th>
              <th>Origin</th>
              <th>Scheduled Time</th>
              <th>Scheduled - 24h</th>
              <th>New Time</th>
              <th>New Time - 24h</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody id="train-board">
            {trainsInfo && trainsInfo !== [] && trainsInfo[0] ? (
              trainsInfo
            ) : (
              <tr>
                <th colSpan="2">{null}</th>
                <th />
                <th colSpan="3">No Trains Found</th>
                <th />
                <th colSpan="2">{null}</th>
              </tr>
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default AmtrakSearchBoard;
