import React from "react";
import { Switch, Route } from "react-router-dom";
import EventsList from "../../containers/event-list/event-list";
import Event from "../../containers/event-list/event-list";
import EventCreate from "../../containers/event-create/event-create";

const EventRouting = () => (
  <Switch>
    <Route exact path='/event/list' component={EventsList}/>
    <Route exact path='/event/create' component={EventCreate}/>
    <Route path='/event/:code' component={Event}/>
  </Switch>
);

export default EventRouting;