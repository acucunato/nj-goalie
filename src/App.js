import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import Training from "./pages/Training";
import Staff from "./pages/Staff";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route exact path={["/"]}>
            <HomePage />
          </Route>
          <Route exact path={["/about"]}>
            <AboutUs />
          </Route>
          <Route exact path={["/staff"]}>
            <Staff />
          </Route>
          <Route exact path={["/training"]}>
            <Training />
          </Route>
          <Route exact path={["/contact"]}>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
