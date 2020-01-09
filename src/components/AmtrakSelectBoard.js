import React, { Component } from "react";

import { nameHelper } from "../helpers/nameHelper";
import { remarksHelper } from "../helpers/remarksHelper";
import { timeHelper } from "../helpers/timeHelper";

import Time from "./Time.js";

class AmtrakSelectBoard extends Component {
  render() {
    const trainsInfo =
      this.props.amtrakTrains &&
      this.props.amtrakTrains.length !== 0 &&
      this.props.amtrakTrains.map((train, index) => {
        return train.trainno.trim() ? (
          <tr key={index}>
            <td>{train.trainno}</td>
            <td>{nameHelper(train.service)}</td>
            <td>{train.destination}</td>
            <td>{train.origin}</td>
            <td>{timeHelper(train.scheduled)}</td>
            <td>{timeHelper(train.scheduled24)}</td>
            <td>{timeHelper(train.newtime)}</td>
            <td>{timeHelper(train.newtime24)}</td>
            <td className={remarksHelper(train.remarks_boarding)}>
              {nameHelper(train.remarks_boarding)}
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
                <th>Scheduled Time</th>
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
