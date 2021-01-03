import { React } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Login from "./Login";

const App = () => {
  return (
    <div className="app">
      <Router>
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

          <Route exact path="/">
            <section>
              <NavBar />
            </section>
          </Route>


          
        </Switch>
      </Router>
    </div>
  );
};

export default App;
