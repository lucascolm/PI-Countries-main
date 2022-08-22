import "./App.css";
import React from "react";
import { Route, BrowserRouter,Switch} from "react-router-dom";

import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <BrowserRouter>
      |<Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" />
        <Route exact path="/countrie/:id" />
        <Route exact path="/activity" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
