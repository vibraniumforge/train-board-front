import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import About from "./components/About";
import Home from "./components/Home";
import AmtrakStationSearch from "./containers/AmtrakStationSearch";
import AmtrakStationSelect from "./containers/AmtrakStationSelect";
import NewTrainForm from "./containers/NewTrainForm";
import EditTrainForm from "./containers/EditTrainForm";
import ViewUserTrains from "./components/ViewUserTrains";

export default (
  <Router>
    <div>
      <Navbar />
      <Switch id="routes">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/search_amtrak_station" component={AmtrakStationSearch} />
        <Route path="/select_amtrak_station" component={AmtrakStationSelect} />
        <Route path="/new_user_train" component={NewTrainForm} />
        <Route path="/edit_user_train" component={EditTrainForm} />
        <Route path="/view_user_trains" component={ViewUserTrains} />
      </Switch>
    </div>
  </Router>
);
