import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
// import Create from "./components/Create";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />

        <div className="content">
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/"></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
