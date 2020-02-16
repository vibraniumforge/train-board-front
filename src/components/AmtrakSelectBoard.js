import React, { Component } from "react";

import { serviceHelper } from "../helpers/serviceHelper";
import { serviceClassHelper } from "../helpers/serviceClassHelper";
import { remarksHelper } from "../helpers/remarksHelper";
import { remarksClassHelper } from "../helpers/remarksClassHelper";
import { timeHelper } from "../helpers/timeHelper";
import { timeHelper24 } from "../helpers/timeHelper24";
import { stationHelper } from "../helpers/stationHelper";
import Time from "./Time.js";

class AmtrakSelectBoard extends Component {
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
      this.props.amtrakTrains.length !== 0 &&
      this.props.amtrakTrains.map((train, index) => {
        return train.trainno.trim() ? (
          <tr key={index}>
            <td>{train.trainno}</td>
            <td className={serviceClassHelper(train.service)}>
              {serviceHelper(train.service)}
            </td>
            <td>{stationHelper(train.destination)}</td>
            <td>{stationHelper(train.origin)}</td>
            <td>{timeHelper(train.scheduled, train.scheduled24)}</td>
            <td>{timeHelper24(train.scheduled24)}</td>
            <td>{timeHelper(train.newtime, train.newtime24)}</td>
            <td>{timeHelper24(train.newtime24)}</td>
            <td className={remarksClassHelper(train.remarks_boarding)}>
              {remarksHelper(train.remarks_boarding)}
            </td>
          </tr>
        ) : null;
      });
    return (
      <React.Fragment>
        {trainsInfo && trainsInfo[0] !== null ? (
          <table>
            <thead>
              <Time
                stationName={this.props.stationName}
                timeZone={this.props.timeZone}
              />
              <tr>
                <th>Train Number</th>
                <th>Train Name</th>
                <th>Destination</th>
                <th>Origin</th>
                <th>Scheduled</th>
                <th>Scheduled - 24h</th>
                <th>New Time</th>
                <th>New Time - 24h</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody id="train-board">{trainsInfo}</tbody>
          </table>
        ) : null}
      </React.Fragment>
    );
  }
}

export default AmtrakSelectBoard;
