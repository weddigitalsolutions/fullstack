import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace.jsx";
import MainNavigation from "./shared/components/Navigation/MainNavigation.component";
import UsersPlaces from "./user/pages/UsersPlaces";
import UpdatePlace from "./places/pages/UpdatePlace.component";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/:userId/places" exact component={UsersPlaces} />
          <Route path="/places/new" component={NewPlace} />
          <Route path="/places/:placeId" exact component={UpdatePlace} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
