import React, { Component } from "react";

import { serviceHelper } from "../helpers/serviceHelper";
import { remarksHelper } from "../helpers/remarksHelper";
import { timeHelper } from "../helpers/timeHelper";
import SplitFlapDisplay from "react-split-flap-display";
// import { stationHelper } from "../helpers/stationHelper";

import Time from "./Time";

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
      this.props.amtrakTrains.length > 0 &&
      this.props.amtrakTrains.map((train, index) => {
        return train.trainno.trim() ? (
          <tr key={index}>
            <td className="display-item">
              {" "}
              {/* train no */}
              <SplitFlapDisplay
                characterSet={[...SplitFlapDisplay.NUMERIC]}
                value={train.trainno}
                textColor="#ffff00"
              />
            </td>
            {/* train name */}
            <td className="display-item">
              {" "}
              <SplitFlapDisplay
                characterSet={[...SplitFlapDisplay.ALPHA]}
                value={serviceHelper(train.service).toUpperCase()}
                textColor="#ffff00"
              />
            </td>
            {/* destination */}
            <td>
              {" "}
              <SplitFlapDisplay
                characterSet={[...SplitFlapDisplay.ALPHA]}
                value={train.destination.toUpperCase()}
                textColor="#ffff00"
              />
            </td>
            <td>
              <SplitFlapDisplay
                characterSet={[
                  ...SplitFlapDisplay.NUMERIC,
                  ...SplitFlapDisplay.PUNCTUATION
                ]}
                value={timeHelper(train.scheduled)}
                textColor="#ffff00"
              />
            </td>
            <td>
              {" "}
              <SplitFlapDisplay
                characterSet={[
                  ...SplitFlapDisplay.NUMERIC,
                  ...SplitFlapDisplay.PUNCTUATION
                ]}
                value={timeHelper(train.scheduled24)}
                textColor="#ffff00"
              />
            </td>
            <td>
              {timeHelper(train.newtime) ? (
                <SplitFlapDisplay
                  characterSet={[
                    ...SplitFlapDisplay.NUMERIC,
                    ...SplitFlapDisplay.PUNCTUATION
                  ]}
                  value={timeHelper(train.newtime)}
                  textColor="#ffff00"
                />
              ) : null}
            </td>
            <td>
              {" "}
              {timeHelper(train.newtime24) ? (
                <SplitFlapDisplay
                  characterSet={[
                    ...SplitFlapDisplay.NUMERIC,
                    ...SplitFlapDisplay.PUNCTUATION
                  ]}
                  value={timeHelper(train.newtime24)}
                  textColor="#ffff00"
                />
              ) : null}
            </td>
            <td>
              {" "}
              <SplitFlapDisplay
                characterSet={[
                  ...SplitFlapDisplay.ALPHA,
                  ...SplitFlapDisplay.PUNCTUATION
                ]}
                value={train.origin.toUpperCase()}
                textColor="#ffff00"
              />
            </td>
            <td className={remarksHelper(train.remarks_boarding)}>
              {serviceHelper(train.remarks_boarding)}
            </td>
          </tr>
        ) : null;
      });
    return (
      <React.Fragment>
        {trainsInfo && trainsInfo.length > 0 && trainsInfo[0] !== null ? (
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
                <th>Scheduled Time</th>
                <th>Scheduled - 24h</th>
                <th>New Time</th>
                <th>New Time - 24h</th>
                <th>Origin</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody id="train-board">{trainsInfo}</tbody>
          </table>
        ) : // <table>
        //   <thead>
        //     <Time
        //       stationName={this.props.stationName}
        //       timeZone={this.props.timeZone}
        //     />
        //     <tr>
        //       <th>Train Number</th>
        //       <th>Train Name</th>
        //       <th>Destination</th>
        //       <th>Scheduled Time</th>
        //       <th>Scheduled - 24h</th>
        //       <th>New Time</th>
        //       <th>New Time - 24h</th>
        //       <th>Origin</th>
        //       <th>Remarks</th>
        //     </tr>
        //   </thead>
        //   <tbody id="train-board">
        //     <tr>
        //       <th colSpan="2">{null}</th>
        //       <th />
        //       <th colSpan="3">No Trains Found</th>
        //       <th />
        //       <th colSpan="2">{null}</th>
        //     </tr>
        //   </tbody>
        // </table>
        null}
      </React.Fragment>
    );
  }
}

export default AmtrakSelectBoard;
