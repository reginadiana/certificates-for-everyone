import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/index";
import ListOfEvents from "./pages/list-of-events/index";
import PageConfirmation from "./pages/page-confirmation/index";
import PageNotFound from "./pages/page-not-found/index";
import SignIn from "./pages/sign-in/index";
import SignUp from "./pages/sign-up/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/events" component={ListOfEvents} />
      <Route exact path="/page-confirmation" component={PageConfirmation} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />

      <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
