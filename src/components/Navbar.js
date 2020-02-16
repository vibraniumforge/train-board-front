import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <NavLink activeClassName="selected" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="selected" to="/select_amtrak_station">
          Select an Amtrak Station
        </NavLink>
        <NavLink activeClassName="selected" to="/search_amtrak_station">
          Search for an Amtrak Station
        </NavLink>
        <NavLink activeClassName="selected" to="/view_user_trains">
          View My Train Board
        </NavLink>
        <NavLink activeClassName="selected" to="/new_user_train">
          Create a new Train
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
