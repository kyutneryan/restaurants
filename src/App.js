import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Restaurant from "./components/Restaurant";
import Restaurants from "./components/Restaurants";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Restaurants />
        </Route>
        <Route exact path='/:restaurantId'>
          <Restaurant />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
