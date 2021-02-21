import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./views/About";
import Events from "./views/Events";
import Home from "./views/Home";
import Booking from "./views/Booking";
import Navigationbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
