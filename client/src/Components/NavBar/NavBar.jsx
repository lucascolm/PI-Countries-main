import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SerchBar from "../SearchBar/SerchBar";
import { useHistory } from "react-router-dom";
//import {cleanState}from "../../redux/actions/index"
const NavBar = () => {
  const dispatch=useDispatch();

  // const clear=()=>{
  //   dispatch(cleanState())
    
  //  }
  return (
    <div className="navbar">
      NavBar
      <h1> navbar</h1>
      <Link to="/home">Home</Link>
      <SerchBar></SerchBar>
      <Link to="/home/activity">Activity</Link>
    </div>
  );
};

export default NavBar;
