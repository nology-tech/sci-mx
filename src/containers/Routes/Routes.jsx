import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "../LandingPage";
import WorkoutPage from "../WorkoutPage";
import LibraryPage from "../LibraryPage";
import NotFoundPage from "../NotFoundPage";
import Tracker from "../Tracker";
import ProfilePage from "../ProfilePage";
import Login from "../Login";
//! localhost://3000/#... --> this route still works even though it should fail... probably because # is denoting id?
import { UserContext } from "../../context/UserProvider/UserProvider";
const Routes = () => {
  const userContext = useContext(UserContext);
  let privateRoutes = "";
  if (!userContext.user) {
    privateRoutes = <Redirect to="/" />;
  }

  return (
    <Switch>
      <Route exact path="/profile">
        {privateRoutes}
        <ProfilePage />
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        {privateRoutes}
        <LandingPage />
      </Route>
      <Route path="/tracker">
        {privateRoutes}
        <Tracker />
      </Route>
      <Route path="/workout/:workoutID">
        {privateRoutes}
        <WorkoutPage />
      </Route>
      <Route path="/library">
        {privateRoutes}
        <LibraryPage />
      </Route>
      <Route path="/*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;
