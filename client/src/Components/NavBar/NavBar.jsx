import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import SerchBar from "../SearchBar/SerchBar";
//import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";
import s from "./NavBar.module.css";
//import {cleanState}from "../../redux/actions/index"
const NavBar = () => {
  const dispatch = useDispatch();
  const history =useHistory();
  // const clear=()=>{
  //   dispatch(cleanState())
  
  //  }
  return (
    <div className={s.NavBar}>
      <div className={s.navUp}>
      <div className={s.log}>
        <Link to="/">
          <p className={s.logo}></p>
        </Link>
      </div>

      <div className={s.links}>
        <div style={{ gap: "40px"}}>
        <button onClick={()=>history.push("/home")} className={s.Link} to="/home">Inicio</button>
        <button onClick={()=>history.push("/home/activity")}className={s.Link} >Nueva actividad</button>
        </div>
      </div>
      <div className={s.SerchBar}>
        <SerchBar />
      </div>
      </div>
     <div className={s.selects}>
        <div>
          <select>
            <option hidden>Por continente</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
          </select>
        </div>
        <div>
          <select>
            <option hidden>Por orden</option>
            <option value="ASC">A-Z</option>
            <option value="DESC">Z-A</option>
          </select>
        </div>
        <div>
          <select>
            <option hidden>Por poblacion</option>
            <option value="PASC">Mayor poblacion</option>
            <option value="PDESC"> Menor poblacion</option>
          </select>
        </div>
      </div> 
    </div>
  );
};

export default NavBar;
