import { Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import WorkoutPage from "../WorkoutPage";
import LibraryPage from "../LibraryPage";
import NotFoundPage from "../NotFoundPage";
import Tracker from "../Tracker";

//! localhost://3000/#... --> this route still works even though it should fail... probably because # is denoting id?
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/profile">
        <ProfilePage />
      </Route>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/home">
        <LandingPage />
      </Route>
      <Route path="/workout">
        <WorkoutPage />
      </Route>
      <Route path="/tracker">
        <Tracker />
      </Route>
      <Route path="/library">
        <LibraryPage />
      </Route>
      <Route path="/*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;
