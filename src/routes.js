import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import AmtrakStationSearch from "./containers/AmtrakStationSearch";
import AmtrakStationSelect from "./containers/AmtrakStationSelect";
import NewTrainForm from "./containers/NewTrainForm";
import EditTrainForm from "./containers/EditTrainForm";
import ViewUserTrains from "./containers/ViewUserTrains";

export default (
  <Router>
    <div>
      <Navbar />
      <Switch id="routes">
        <Route exact path="/" component={Home} />
        <Route path="/search_amtrak_station" component={AmtrakStationSearch} />
        <Route path="/select_amtrak_station" component={AmtrakStationSelect} />
        <Route path="/view_user_trains" component={ViewUserTrains} />
        <Route path="/new_user_train" component={NewTrainForm} />
        <Route path="/edit_user_train" component={EditTrainForm} />
      </Switch>
    </div>
  </Router>
);
