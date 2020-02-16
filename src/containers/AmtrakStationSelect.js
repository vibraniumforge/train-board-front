import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getAmtrakTrains } from "../actions/amtrakTrainActions";
import AmtrakSelectBoard from "../components/AmtrakSelectBoard";

class StationSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stationCode: "",
      stationName: "",
      timeZone: "",
      showBoard: false,
      selectedStationName: "",
      selectedTimezone: ""
    };
  }

  shouldComponentUpdate = nextProps => {
    if (
      this.props.trains.length === nextProps.trains.length &&
      this.props.trains[0] === nextProps.trains[0]
    ) {
      return false;
    } else {
      return true;
    }
  };

  onChange = e => {
    this.setState({
      stationCode: e.target.value,
      stationName: e.target.selectedOptions[0].innerText,
      timeZone: e.target.selectedOptions[0].dataset.timezone
    });
  };

  onSubmitAmtrak = e => {
    e.preventDefault();
    if (this.state.stationCode) {
      this.props.getAmtrakTrains(this.state.stationCode);
      const selectedStationName = this.state.stationName;
      const selectedTimeZone = this.state.timeZone;
      this.setState({
        selectedStationName: selectedStationName,
        selectedTimezone: selectedTimeZone,
        showBoard: true
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div id="station-select" className="center">
            {/* <h4>Choose a station:</h4> */}
            <select
              name="stationCode"
              value={this.state.selectedStation}
              onChange={this.onChange}
            >
              <option value="" />
              <option value="NYP" data-timezone="America/New_York">
                New York Penn Station
              </option>
              <option value="WAS" data-timezone="America/New_York">
                Washington Union Station
              </option>
              <option value="PHL" data-timezone="America/New_York">
                Philadelphia 30th Street
              </option>
              <option value="BOS" data-timezone="America/New_York">
                Boston South Station
              </option>
              <option value="CHI" data-timezone="America/Chicago">
                Chicago Union Station
              </option>
              <option value="STL" data-timezone="America/Chicago">
                St. Louis Gateway Transit Center
              </option>
              <option value="SEA" data-timezone="America/Los_Angeles">
                Seattle King Street Station
              </option>
              <option value="EMY" data-timezone="America/Los_Angeles">
                Emeryville (Oakland) CA
              </option>
              <option value="LAX" data-timezone="America/Los_Angeles">
                Los Angeles Union Station{" "}
              </option>
              <option value="SAN" data-timezone="America/Los_Angeles">
                San Diego Santa Fe Depot
              </option>
            </select>
            <button type="button" id="search-btn" onClick={this.onSubmitAmtrak}>
              See This Station
            </button>
          </div>
        </form>
        {this.state.showBoard ? (
          <AmtrakSelectBoard
            stationName={this.state.selectedStationName}
            timeZone={this.state.selectedTimezone}
            amtrakTrains={this.props.trains}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  trains: state.amtrakTrains.amtrakTrains
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAmtrakTrains
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StationSelect)
);
