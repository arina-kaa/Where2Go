import React from "react";
import { Switch, Route } from "react-router-dom";
import EventsList from "../../components/event-list/event-list";
import Event from "../../components/event/event";
import EventCreate from "../../components/event-create/event-create";

const EventRouting = () => (
  <Switch>
    <Route exact path='/event/list' component={EventsList}/>
    <Route exact path='/event/create' component={EventCreate}/>
    <Route path='/event/:code' component={Event}/>
  </Switch>
);

export default EventRouting;