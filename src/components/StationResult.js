import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getAmtrakTrains } from "../actions/amtrakTrainActions";
import AmtrakSearchBoard from "./AmtrakSearchBoard";

class StationResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeAr: [],
      stationName: "",
      showBoard: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.amtrakStationSearchResult.length > 0 &&
      this.props.amtrakStationSearchResult.length !==
        prevProps.amtrakStationSearchResult.length &&
      this.state.placeAr === prevState.placeAr
    ) {
      this.editInfo();
    }
  }

  onSubmit = e => {
    this.props.getAmtrakTrains(e.target.dataset.stationcode);
    this.setState({
      placeAr: "",
      stationName: e.target.dataset.stationname,
      showButtons: true,
      showBoard: true
    });
  };

  editInfo = () => {
    if (this.props.amtrakStationSearchResult.length > 0) {
      const trainsString = this.props.amtrakStationSearchResult;
      let newAr = [];
      trainsString
        .split('blank">')
        .slice(1)
        .forEach(place =>
          newAr.push(place.trim().slice(0, place.indexOf("<")))
        );
      this.setState({ placeAr: newAr });
    }
  };

  render() {
    const places =
      this.state.placeAr &&
      this.state.placeAr.length !== 0 &&
      this.state.placeAr.map((place, index) => (
        <li key={index}>
          <button
            type="button"
            className="station-button"
            onClick={this.onSubmit}
            data-stationcode={place.slice(0, 3)}
            data-stationname={place.slice(4)}
          >
            {place}
          </button>
        </li>
      ));

    return (
      <React.Fragment>
        <div id="station-buttons-div" className="center">
          <ul className="center">{places}</ul>
        </div>
        <div>
          {this.state.showBoard && this.props.amtrakTrains.length > 0 ? (
            <AmtrakSearchBoard
              stationName={this.state.stationName}
              amtrakTrains={this.props.amtrakTrains}
            />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  amtrakTrains: state.amtrakTrains.amtrakTrains
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAmtrakTrains
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StationResult)
);
