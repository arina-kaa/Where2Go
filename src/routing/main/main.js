import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../containers/home/home";
import Event from "../event/event";
import User from "../user/user";

const MainRouting = () => (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/event" component={Event} />
        <Route path="/user" component={User} />
      </Switch>
    </main>
);

export default MainRouting;