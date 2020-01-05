import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/home.component";
import Events from "../events/events.component";
import User from "../user/user.component";

const Main = () => (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/user" component={User} />
      </Switch>
    </main>
);

export default Main;