import React from "react";
import { Switch, Route } from "react-router-dom";
import EventsList from "../events-list/events-list.component";
import Event from "../event/event.component";
import EventCreate from "../event-create/event-create.component";

const Events = () => (
  <Switch>
    <Route exact path='/events' component={EventsList}/>
    <Route exact path='/events/create' component={EventCreate}/>
    <Route path='/events/:code' component={Event}/>
  </Switch>
);

export default Events;