import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateTrain } from "../actions/userTrainActions";
import Errors from "../components/Errors";

class TrainForm extends Component {
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

  componentDidUpdate(prevProps) {
    if (
      this.props.trainToUpdate &&
      this.props.trainToUpdate !== prevProps.trainToUpdate
    ) {
      this.setState({
        destination: this.props.trainToUpdate.destination,
        newtime: this.props.trainToUpdate.newtime,
        newtime24: this.props.trainToUpdate.newtime24,
        origin: this.props.trainToUpdate.origin,
        remarks_boarding: this.props.trainToUpdate.remarks_boarding,
        scheduled: this.props.trainToUpdate.scheduled,
        scheduled24: this.props.trainToUpdate.scheduled24,
        service: this.props.trainToUpdate.service,
        trainno: this.props.trainToUpdate.trainno
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const updatedTrain = this.state;
    this.props.updateTrain(this.props.trainToUpdate.id, updatedTrain);
    if (this.isValid()) {
      this.props.history.push("/view_user_trains");
      this.clearForm();
    }
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

  cancel = () => {
    this.clearForm();
    this.props.history.push("/view_user_trains");
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
        <form id="edit-train" className="center">
          <h4>Edit a train</h4>
          <div>
            <label htmlFor="train-destination">Destination</label>
            <input
              type="text"
              id="train-destination"
              name="destination"
              className={
                !this.state.destination && this.props.trainErrors.length > 0
                  ? "errors"
                  : ""
              }
              placeholder="Destination city"
              value={this.state.destination}
              onChange={this.handleChange}
            />
            <label htmlFor="new-time">New Time</label>
            <input
              type="text"
              id="new-time"
              name="newtime"
              className={
                ![0, 4].includes(this.state.newtime.length) &&
                this.props.trainErrors.length > 0
                  ? "errors"
                  : ""
              }
              placeholder="New Time (if late). Format HHMM"
              value={this.state.newtime}
              onChange={this.handleChange}
            />
            <label htmlFor="new-time-24">New Time 24h</label>
            <input
              type="text"
              id="new-time-24"
              name="newtime24"
              className={
                ![0, 4].includes(this.state.newtime24.length) &&
                this.props.trainErrors.length > 0
                  ? "errors"
                  : ""
              }
              placeholder="New Time HHMM 24h (if late)."
              value={this.state.newtime24}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="train-origin">Origin</label>
            <input
              type="text"
              id="train-origin"
              name="origin"
              className={
                !this.state.origin && this.props.trainErrors.length > 0
                  ? "errors"
                  : ""
              }
              placeholder="Train Origin city"
              value={this.state.origin}
              onChange={this.handleChange}
            />
            <label htmlFor="train-remarks">Remarks</label>
            <input
              type="text"
              id="train-remarks"
              name="remarks_boarding"
              className={
                !this.state.remarks_boarding &&
                this.props.trainErrors.length > 0
                  ? "errors"
                  : ""
              }
              placeholder="Remarks"
              value={this.state.remarks_boarding}
              onChange={this.handleChange}
            />
            <label htmlFor="train-scheduled-arrival">Scheduled</label>
            <input
              type="text"
              id="train-scheduled-arrival"
              name="scheduled"
              className={
                !this.state.scheduled && this.props.trainErrors.length > 0
                  ? "errors"
                  : ""
              }
              placeholder="Scheduled Arrival. Format HHMM"
              value={this.state.scheduled}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="train-scheduled-arrival-24">Scheduled 24h</label>
            <input
              type="text"
              id="train-scheduled-arrival-24"
              name="scheduled24"
              className={
                !this.state.scheduled24 && this.props.trainErrors.length > 0
                  ? "errors"
                  : ""
              }
              placeholder="Scheduled Arrival 24h. Format HHMM"
              value={this.state.scheduled24}
              onChange={this.handleChange}
            />
            <label htmlFor="train-service">Service Name</label>
            <input
              type="text"
              id="train-service"
              name="service"
              className={
                !this.state.service && this.props.trainErrors.length > 0
                  ? "errors"
                  : ""
              }
              placeholder="Service Name"
              value={this.state.service}
              onChange={this.handleChange}
            />
            <label htmlFor="train-number">Train Number</label>
            <input
              type="text"
              id="train-number"
              name="trainno"
              className={
                !this.state.trainno && this.props.trainErrors.length > 0
                  ? "errors"
                  : ""
              }
              placeholder="Number"
              value={this.state.trainno}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button
            className="submit-btn"
            type="button"
            id="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <button
            className="clear-btn"
            type="button"
            id="clear-btn"
            onClick={this.clearForm}
          >
            Clear
          </button>
          <button
            className="cancel-btn"
            type="button"
            id="cancel"
            onClick={this.cancel}
          >
            Cancel
          </button>
        </form>
        {this.props.trainErrors.length > 0 ? (
          <Errors trainErrors={this.props.trainErrors} />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  trainToUpdate: state.userTrains.trainToUpdate,
  trainErrors: state.userTrains.trainErrors
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateTrain
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TrainForm)
);
