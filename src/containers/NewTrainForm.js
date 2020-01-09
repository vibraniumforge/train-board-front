import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createTrain } from "../actions/userTrainActions";
import Errors from "../components/Errors";

// import Sample from "../components/Sample";

class NewTrainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      newtime: "",
      newtime24: "",
      origin: "",
      remarks_boarding: "",
      scheduled: "",
      scheduled24: "",
      service: "",
      trainno: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newTrain = this.state;
    const promise1 = this.props.createTrain(newTrain);
    Promise.all([promise1]).then(() => {
      if (this.isValid()) {
        this.clearForm();
        this.props.history.push("/view_user_trains");
      }
    });
  };

  isValid = () => {
    if (
      this.state.destination &&
      this.state.scheduled.length === 4 &&
      this.state.scheduled24.length === 4 &&
      this.state.remarks_boarding &&
      this.state.origin &&
      this.state.service &&
      this.state.trainno &&
      (this.state.newtime.length === 0 || this.state.newtime.length === 4) &&
      (this.state.newtime24.length === 0 || this.state.newtime24.length === 4)
    ) {
      return true;
    }
    return false;
  };

  clearForm = () => {
    this.setState({
      destination: "",
      newtime: "",
      newtime24: "",
      origin: "",
      remarks_boarding: "",
      scheduled: "",
      scheduled24: "",
      service: "",
      trainno: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <form id="new-train" className="center">
          <h4>Create a new train</h4>
          <div>
            <label htmlFor="train-destination">Destination</label>
            <input
              type="text"
              id="train-destination"
              name="destination"
              placeholder="Destination"
              value={this.state.destination}
              onChange={this.handleChange}
            />
            <label htmlFor="new-time">New Time</label>
            <input
              type="text"
              id="new-time"
              name="newtime"
              placeholder="New Time (if late). Format HHMM"
              value={this.state.newtime}
              onChange={this.handleChange}
            />
            <label htmlFor="new-time-24">New Time 24h</label>
            <input
              type="text"
              id="new-time-24"
              name="newtime24"
              placeholder="New Time (if late) HHMM 24h."
              value={this.state.newtime24}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="train-origin">Origin</label>
            <input
              type="text"
              id="train-origin"
              name="origin"
              placeholder="Train Origin"
              value={this.state.origin}
              onChange={this.handleChange}
            />
            <label htmlFor="train-remarks">Remarks</label>
            <input
              type="text"
              id="train-remarks"
              name="remarks_boarding"
              placeholder="Remarks"
              value={this.state.remarks_boarding}
              onChange={this.handleChange}
            />
            <label htmlFor="train-scheduled-arrival">Scheduled</label>
            <input
              type="text"
              id="train-scheduled-arrival"
              name="scheduled"
              placeholder="Scheduled Arrival Format HHMM"
              value={this.state.scheduled}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="train-scheduled-arrival-24">Scheduled 24h</label>
            <input
              type="text"
              id="train-scheduled-arrival-24"
              name="scheduled24"
              placeholder="Scheduled Arrival 24h. Format HHMM"
              value={this.state.scheduled24}
              onChange={this.handleChange}
            />
            <label htmlFor="train-service">Service Name</label>
            <input
              type="text"
              id="train-service"
              name="service"
              placeholder="Service Name"
              value={this.state.service}
              onChange={this.handleChange}
            />
            <label htmlFor="train-number">Train Number</label>
            <input
              type="text"
              id="train-number"
              name="trainno"
              placeholder="Number"
              value={this.state.trainno}
              onChange={this.handleChange}
            />
            <br />
            {/* <textarea
              id="fix-me"
              name="errors"
              placeholder=""
              disabled
              className={
                this.isValid() && this.props.trainErrors.length > 0
                  ? ""
                  : "error"
              }
              value={this.props.trainErrors.join(", ")}
            /> */}
          </div>
          <br />
          <button
            className="submit-btn"
            type="button"
            id="submit"
            onClick={e => this.handleSubmit(e)}
          >
            Submit
          </button>
          <button
            className="clear-btn"
            type="button"
            id="clear"
            onClick={this.clearForm}
          >
            Clear
          </button>
        </form>
        {this.props.trainErrors.length > 0 ? (
          <Errors trainErrors={this.props.trainErrors} />
        ) : null}
        {/* <Sample /> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  // trainToUpdate: state.userTrains.trainToUpdate,
  trainErrors: state.userTrains.trainErrors
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createTrain
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewTrainForm)
);

// old redux fx

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       createTrain
//     },
//     dispatch
//   );

// export default withRouter(
//   connect(
//     null,
//     mapDispatchToProps
//   )(TrainForm)
// );
