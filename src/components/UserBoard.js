import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { serviceHelper } from "../helpers/serviceHelper";
import { remarksHelper } from "../helpers/remarksHelper";
import { timeHelper } from "../helpers/timeHelper";
import { stationHelper } from "../helpers/stationHelper";

import {
  getTrainById,
  updateTrain,
  deleteTrain
} from "../actions/userTrainActions";

import Time from "./Time";
import LikeButton from "./LikeButton";

class UserBoard extends Component {
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

  shouldComponentUpdate = nextProps => {
    if (this.props.userTrains === nextProps.userTrains) {
      return false;
    } else {
      return true;
    }
  };

  onDeleteTrain = e => {
    e.preventDefault();
    this.props.deleteTrain(e.target.dataset.id);
  };

  onUpdateTrain = e => {
    e.preventDefault();
    this.props.getTrainById(e.target.dataset.id);
    this.props.history.push("edit_user_train");
  };

  render() {
    const trainsInfo =
      this.props.userTrains.length > 0 &&
      this.props.userTrains.map(train => {
        return train.trainno.trim() ? (
          <tr key={train.id}>
            <td>{train.trainno}</td>
            <td>{serviceHelper(train.service)}</td>
            <td>{stationHelper(train.destination)}</td>
            <td>{stationHelper(train.origin)}</td>
            <td>{timeHelper(train.scheduled)}</td>
            <td>{timeHelper(train.scheduled24)}</td>
            <td>{timeHelper(train.newtime)}</td>
            <td>{timeHelper(train.newtime24)}</td>
            <td className={remarksHelper(train.remarks_boarding)}>
              {train.remarks_boarding}
            </td>
            <td>
              <button
                type="button"
                data-id={train.id}
                className="board-button"
                onClick={e => this.onUpdateTrain(e)}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                type="button"
                data-id={train.id}
                className="board-button"
                onClick={e => this.onDeleteTrain(e)}
              >
                Delete
              </button>
            </td>
            <td>
              <LikeButton />
            </td>
          </tr>
        ) : null;
      });
    return (
      <React.Fragment>
        <div>
          <table>
            <thead>
              <Time
                stationName={"My Train Board"}
                timeZone={this.props.timeZone}
              />
              <tr>
                {/* <th colSpan="2">{this.state.time}</th>
                <th />
                <th colSpan="3">My Train Board</th>
                <th />
                <th />
                <th colSpan="2">{this.state.time24h}</th> */}
              </tr>
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
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateTrain,
      deleteTrain,
      getTrainById
    },
    dispatch
  );

export default withRouter(connect(null, mapDispatchToProps)(UserBoard));
