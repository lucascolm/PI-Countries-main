import "./App.css";
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
import CardDetail from "./Components/CardDetail/CardDetail";
import NavBar from "./Components/NavBar/NavBar";
import FormAct from "./Components/FormAct/FormAct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Switch> */}
          <Route exact path="/" component={Landing} />
          <Route path="/home"component={NavBar}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/countries/:id" component={CardDetail} />
          <Route exact path="/home/activity" component={FormAct} />
          
         
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
