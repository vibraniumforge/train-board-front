import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createTrain } from "../actions/userTrainActions";
import Errors from "../components/Errors";
import { validationHelper } from "../helpers/validationHelper";

class NewTrainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // destination: "Spokane",
      // newtime: "",
      // newtime24: "",
      // origin: "Seattle",
      // remarks_boarding: "On Time",
      // scheduled: "1234",
      // scheduled24: "1234",
      // service: "Washington Train",
      // trainno: "27",

      // destination: "",
      // newtime: "",
      // newtime24: "",
      // origin: "",
      // remarks_boarding: "",
      // scheduled: "",
      // scheduled24: "",
      // service: "",
      // trainno: "",

      // destinationValid: false,
      // newtimeValid: false,
      // newtime24Valid: false,
      // originValid: false,
      // remarks_boardingValid: false,
      // scheduledValid: false,
      // scheduled24Valid: false,
      // serviceValid: false,
      // trainnoValid: false,
      // entireFormValid: false,
      // formErrors: {
      //   destination: "",
      //   newtime: "",
      //   newtime24: "",
      //   origin: "",
      //   remarks_boarding: "",
      //   scheduled: "",
      //   scheduled24: "",
      //   service: "",
      //   trainno: ""
      // }

      fields: {},
      errors: {}
    };
  }

  // Validation #1

  // backend one

  // handleChange = e => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   // this.setState({ [name]: value }, () => this.validateAField(name, value));
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const newTrain = this.state;
  //   if (validationHelper(newTrain)) {
  //     this.props.createTrain(newTrain);
  //     this.props.history.push("/view_user_trains");
  //     this.clearForm();
  //   }
  // };

  // Also this one

  // handleSubmit = e => {
  //   console.log(this.state);
  //   e.preventDefault();
  //   const newTrain = this.state;
  //   // const promise1 = this.props.createTrain(newTrain);
  //   Promise.all([this.props.createTrain(newTrain)]).then(() => {
  //     if (this.validateForm()) {
  //       this.clearForm();
  //       this.props.history.push("/view_user_trains");
  //     }
  //   });
  // };

  // Validation #2. First front end one a week ago.

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const newTrain = this.state;
  //   if (this.isValid()) {
  //     this.props.createTrain(newTrain);
  //     this.clearForm();
  //     this.props.history.push("/view_user_trains");
  //   }
  // };

  // isValid = () => {
  //   if (
  //     this.state.destination &&
  //     this.state.scheduled.length === 4 &&
  //     this.state.scheduled24.length === 4 &&
  //     this.state.remarks_boarding &&
  //     this.state.origin &&
  //     this.state.service &&
  //     this.state.trainno &&
  //     (this.state.newtime.length === 0 || this.state.newtime.length === 4) &&
  //     (this.state.newtime24.length === 0 || this.state.newtime24.length === 4)
  //   ) {
  //     return true;
  //   }
  //   return false;
  // };

  // Validation #3 long version.
  // Does not work. Page loads with all 9 inputs invalid.

  // validateAField = (fieldName, value) => {
  //   let fieldValidationErrors = this.state.formErrors;
  //   let destinationValid = this.state.destinationValid;
  //   let newtimeValid = this.state.newtimeValid;
  //   let newtime24Valid = this.state.newtime24Valid;
  //   let originValid = this.state.originValid;
  //   let remarks_boardingValid = this.state.remarks_boardingValid;
  //   let scheduledValid = this.state.scheduledValid;
  //   let scheduled24Valid = this.state.scheduled24Valid;
  //   let serviceValid = this.state.serviceValid;
  //   let trainnoValid = this.state.trainnoValid;
  //   let entireFormValid = this.state.entireFormValid;

  //   switch (fieldName) {
  //     case "destination":
  //       destinationValid = value.length > 0;
  //       fieldValidationErrors.destination = destinationValid
  //         ? ""
  //         : "Must exist";
  //       break;
  //     case "newTime":
  //       newtimeValid = [3, 4].includes(value.length);
  //       fieldValidationErrors.newTime = newtimeValid
  //         ? ""
  //         : "Must be 3 or 4 chars.";
  //       break;
  //     case "newTime24":
  //       newtime24Valid = [3, 4].includes(value.length);
  //       fieldValidationErrors.newTime24 = newtime24Valid
  //         ? ""
  //         : "Must be 3 or 4 chars.";
  //       break;
  //     case "origin":
  //       originValid = value.length > 0;
  //       fieldValidationErrors.originValid = originValid ? "" : "Must exit";
  //       break;
  //     case "remarks_boarding":
  //       remarks_boardingValid = value.length > 0;
  //       fieldValidationErrors.remarks_boardingValid = remarks_boardingValid
  //         ? ""
  //         : "Must exit";
  //       break;
  //     case "scheduled":
  //       scheduledValid = [0, 3, 4].includes(value.length);
  //       fieldValidationErrors.scheduledValid = scheduledValid
  //         ? ""
  //         : "Must be 0, 3, or 4 chars.";
  //       break;
  //     case "scheduled24":
  //       scheduled24Valid = [0, 3, 4].includes(value.length);
  //       fieldValidationErrors.scheduled24Valid = scheduled24Valid
  //         ? ""
  //         : "Must be 0, 3, or 4 chars.";
  //       break;
  //     case "service":
  //       serviceValid = value.length > 0;
  //       fieldValidationErrors.serviceValid = serviceValid ? "" : "Must exit";
  //       break;
  //     case "trainno":
  //       trainnoValid = value.length > 0;
  //       fieldValidationErrors.trainnoValid = trainnoValid ? "" : "Must exit";
  //       break;
  //     default:
  //       break;
  //   }
  //   this.setState(
  //     {
  //       formErrors: fieldValidationErrors,
  //       destinationValid: destinationValid,
  //       newtimeValid: newtimeValid,
  //       newtime24Valid: newtime24Valid,
  //       originValid: originValid,
  //       remarks_boardingValid: remarks_boardingValid,
  //       scheduledValid: scheduledValid,
  //       scheduled24Valid: scheduled24Valid,
  //       serviceValid: serviceValid,
  //       trainnoValid: trainnoValid
  //     },
  //     () => console.log(this.state)
  //   );
  // };

  // validateForm = () => {
  //   this.setState({
  //     entireFormValid:
  //       this.state.destinationValid &&
  //       this.state.newtimeValid &&
  //       this.state.newtime24Valid &&
  //       this.state.originValid &&
  //       this.state.remarks_boardingValid &&
  //       this.state.scheduledValid &&
  //       this.state.scheduled24Valid &&
  //       this.state.serviceValid &&
  //       this.state.trainnoValid
  //   });
  // };

  // Validation #4. Shorter way with reduced state values:
  // Works great.

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newTrain = this.state.fields;
    // const promise1 = this.props.createTrain(newTrain);
    if (this.validateForm()) {
      Promise.all([this.props.createTrain(newTrain)]).then(() => {
        this.clearForm();
        this.props.history.push("/view_user_trains");
      });
    }
  };

  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["destination"]) {
      formIsValid = false;
      errors["destination"] = "Must be present";
    }

    if (!fields["scheduled"] || fields["scheduled"].length !== 4) {
      formIsValid = false;
      errors["scheduled"] = "Must be 4 numbers";
    }

    if (fields["scheduled"] && !fields["scheduled"].match(/[0-9]/g)) {
      formIsValid = false;
      errors["scheduled"] = "Numbers only";
    }

    if (!fields["scheduled24"] || fields["scheduled24"].length !== 4) {
      formIsValid = false;
      errors["scheduled24"] = "Must be 4 numbers";
    }

    if (fields["scheduled24"] && !fields["scheduled24"].match(/[0-9]/g)) {
      formIsValid = false;
      errors["scheduled24"] = "Numbers only";
    }

    if (!fields["origin"]) {
      formIsValid = false;
      errors["origin"] = "Must be present";
    }

    if (fields["newtime"] && ![0, 4].includes(fields["newtime"].length)) {
      formIsValid = false;
      errors["newtime"] = "Must be 0 or 4 numbers";
    }

    if (fields["newtime"] && !fields["newtime"].match(/[0-9]/g)) {
      formIsValid = false;
      errors["newtime"] = "Numbers only";
    }

    if (fields["newtime24"] && ![0, 4].includes(fields["newtime24"].length)) {
      formIsValid = false;
      errors["newtime24"] = "Must be 0 or 4 numbers";
    }

    if (fields["newtime24"] && !fields["newtime24"].match(/[0-9]/g)) {
      formIsValid = false;
      errors["newtime24"] = "Numbers only";
    }

    if (!fields["remarks_boarding"]) {
      formIsValid = false;
      errors["remarks_boarding"] = "Must be present";
    }

    if (!fields["service"]) {
      formIsValid = false;
      errors["service"] = "Must be present";
    }

    if (!fields["trainno"]) {
      formIsValid = false;
      errors["trainno"] = "Must be present";
    }

    if (fields["trainno"] && !fields["trainno"].match(/[0-9]/g)) {
      formIsValid = false;
      errors["trainno"] = "Numbers only";
    }

    this.setState({ errors });
    return formIsValid;
  };

  // UNSAFE_componentWillReceiveProps() {
  //   console.log("hi");
  // }

  // Non validation stuff.

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
      trainno: "",
      fields: {}
    });
  };

  render() {
    return (
      <React.Fragment>
        <form id="new-train" className="center">
          <h4>Create a new train</h4>
          <div className="input-row">
            <div className="col-1">
              <label htmlFor="train-destination">Destination</label>
              <input
                type="text"
                // className={!this.state.destinationValid ? "errors" : ""}
                className={this.state.errors.destination ? "errors" : ""}
                id="train-destination"
                name="destination"
                placeholder="Destination"
                // value={this.state.destination}
                value={this.state.fields.destination || ""}
                onChange={this.handleChange}
              />
              <div className="error-message">
                {this.state.errors.destination}
              </div>
            </div>
            <div className="col-2">
              <label htmlFor="train-scheduled-arrival">Scheduled</label>
              <input
                type="text"
                id="train-scheduled-arrival"
                name="scheduled"
                // className={!this.state.scheduledValid ? "errors" : ""}
                className={this.state.errors.scheduled ? "errors" : ""}
                placeholder="Scheduled Time HHMM"
                // value={this.state.scheduled}
                value={this.state.fields.scheduled || ""}
                onChange={this.handleChange}
              />
              <div className="error-message">{this.state.errors.scheduled}</div>
            </div>
            <div className="col-3">
              <label htmlFor="train-scheduled-arrival-24">Scheduled 24h</label>
              <input
                type="text"
                id="train-scheduled-arrival-24"
                name="scheduled24"
                // className={!this.state.scheduled24Valid ? "errors" : ""}
                className={this.state.errors.scheduled24 ? "errors" : ""}
                placeholder="Scheduled Time 24h HHMM"
                // value={this.state.scheduled24}
                value={this.state.fields.scheduled24 || ""}
                onChange={this.handleChange}
              />
              <div className="error-message">
                {this.state.errors.scheduled24}
              </div>
            </div>
          </div>
          <br />
          <div className="input-row">
            <div className="col-1">
              <label htmlFor="train-origin">Origin</label>
              <input
                type="text"
                id="train-origin"
                name="origin"
                // className={!this.state.originValid ? "errors" : ""}
                className={this.state.errors.origin ? "errors" : ""}
                placeholder="Origin City"
                // value={this.state.origin}
                value={this.state.fields.origin || ""}
                onChange={this.handleChange}
              />
              <div className="error-message">{this.state.errors.origin}</div>
            </div>
            <div className="col-2">
              <label htmlFor="new-time">New Time</label>
              <input
                type="text"
                id="new-time"
                name="newtime"
                // className={!this.state.newTimeValid ? "errors" : ""}
                className={this.state.errors.newtime ? "errors" : ""}
                placeholder="New Time (if late) HHMM"
                // value={this.state.newtime}
                value={this.state.fields.newtime || ""}
                onChange={this.handleChange}
              />
              <div className="error-message">{this.state.errors.newtime}</div>
            </div>
            <div className="col-3">
              <label htmlFor="new-time-24">New Time 24h</label>
              <input
                type="text"
                id="new-time-24"
                name="newtime24"
                // className={!this.state.newtime24Valid ? "errors" : ""}
                className={this.state.errors.newtime24 ? "errors" : ""}
                placeholder="New Time (if late) 24h HHMM."
                // value={this.state.newtime24}
                value={this.state.fields.newtime24 || ""}
                onChange={this.handleChange}
              />
              <div className="error-message">{this.state.errors.newtime24}</div>
            </div>
          </div>
          <br />
          {/* <select
              name="stationCode"
              value={this.state.remarks_boarding}
              onChange={this.handleChange}
            >
              <option value="" />
              <option value="Early">Early</option>
              <option value="On Time">On Time</option>
              <option value="Boarding">Boarding</option>
              <option value="Arrived">Arrived</option>
            </select> */}
          <div className="row">
            <div className="col-1">
              <label htmlFor="train-remarks">Remarks</label>
              <input
                type="text"
                id="train-remarks"
                name="remarks_boarding"
                // className={!this.state.remarks_boardingValid ? "errors" : ""}
                className={this.state.errors.remarks_boarding ? "errors" : ""}
                placeholder="Remarks"
                // value={this.state.remarks_boarding}
                value={this.state.fields.remarks_boarding || ""}
                onChange={this.handleChange}
              />
              <div
                className={
                  this.state.errors.remarks_boarding
                    ? "error-message"
                    : "error-message-hidden"
                }
              >
                {this.state.errors.remarks_boarding}
              </div>
            </div>
            <div className="col-2">
              <label htmlFor="train-service">Service Name</label>
              <input
                type="text"
                id="train-service"
                name="service"
                // className={!this.state.serviceValid ? "errors" : ""}
                className={this.state.errors.service ? "errors" : ""}
                placeholder="Service Name"
                // value={this.state.service}
                value={this.state.fields.service || ""}
                onChange={this.handleChange}
              />
              <div
                className={
                  this.state.errors.service
                    ? "error-message"
                    : "error-message-hidden"
                }
              >
                {this.state.errors.service}
              </div>
            </div>
            <div className="col-3">
              <label htmlFor="train-number">Train Number</label>
              <input
                type="text"
                id="train-number"
                name="trainno"
                // className={!this.state.trainnoValid ? "errors" : ""}
                className={this.state.errors.trainno ? "errors" : ""}
                placeholder="Number"
                // value={this.state.trainno}
                value={this.state.fields.trainno || ""}
                onChange={this.handleChange}
              />
              <div
                className={
                  this.state.errors.trainno
                    ? "error-message"
                    : "error-message-hidden"
                }
              >
                {this.state.errors.trainno}
              </div>
            </div>
            <br />
          </div>
          <br />
          <button
            className="submit-btn"
            type="button"
            id="submit"
            onClick={e => this.handleSubmit(e)}
            // disabled={!this.state.entireFormValid}
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
          <button
            className="cancel-btn"
            type="button"
            id="cancel"
            onClick={this.cancel}
          >
            Cancel
          </button>
        </form>
        {/* {this.props.trainErrors.length > 0 ? (
          <Errors trainErrors={this.props.trainErrors} />
        ) : null} */}
        {/* {<FormErrors formErrors={this.state.formErrors} />} */}
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
