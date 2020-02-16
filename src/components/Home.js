import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="explanation">
        <p>
          An app with a Ruby on Rails backend and a React and Redux front end.
          This app simulates a train board at your station of choosing. It can
          also save and display trains that you enter on your own train board.
          Some seeds are included.
        </p>
        <p>
          <strong>Select an Amtrak Station</strong> - This board is designed to
          track arrivals and departures from 10 of the top Amtrak stations in
          the U.S.A. Use the dropdown to select a station.
        </p>
        <p>
          <strong>Search for an Amtrak Station</strong> - Search for a station.
          You can choose to view its board from there.
        </p>
        <p>
          <strong>Create a new Train</strong> - Create your own train. A form
          appears where you can enter information to save.
        </p>
        <p>
          <strong>View My Trains</strong> - Click here to view your existing
          trains.
        </p>
        <p>Choose one of the options above to begin!</p>
      </div>
    );
  }
}

export default Home;
