import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserTrains } from "../actions/userTrainActions";
import UserBoard from "../components/UserBoard";

class UserTrains extends Component {
  componentDidMount() {
    this.props.getUserTrains();
  }

  onSubmitTrains = e => {
    e.preventDefault();
    this.props.getUserTrains();
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="center">
            <button type="button" id="trainsBtn" onClick={this.onSubmitTrains}>
              Refresh
            </button>
          </div>
        </form>
        <UserBoard userTrains={this.props.trains} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  trains: state.userTrains.userSavedTrains
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUserTrains
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserTrains)
);
