import { React } from "react";
import "./StyleSheets/App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Login from "./Login";
import Feed from './Feed'

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/signin">
            <section>
              <SignIn />
            </section>
          </Route>

          <Route exact path="/login">
            <section>
              <Login />
            </section>
          </Route>
          <Route exact path="/feed">
            <section>
              <Feed />
            </section>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
