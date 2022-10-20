import React from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import SerchBar from "../SearchBar/SerchBar";
//import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";
import s from "./NavBar.module.css";
import { OrderByName,orderbypop,filterContinent,cleanState,filterByActivities,changePage } from "../../redux/actions";

const NavBar = () => {
  // const countries =useSelector((state)=>state.countriesFilter)
  const allActivities=useSelector((state) => state.activities)

  const dispatch = useDispatch();
  const history =useHistory();
  const [filter,setfilter]=useState({
    order:"",
    poblacion:"",
    continente:"",
    actividad:""
  })
  function clean(){
    return dispatch(cleanState());
  }
  const handleChangeOrder=(e)=>{
    console.log(e.target.value)
   if (e.target.value==="ASC"||e.target.value==="DESC"){
    dispatch(changePage(1))
    dispatch(OrderByName(e.target.value))
    setfilter({
      ...filter,
      order:e.target.value
    })
   }else if(e.target.value==="PASC"||e.target.value==="PDESC"){
    dispatch(changePage(1))
    dispatch(orderbypop(e.target.value))
    setfilter({
      ...filter,
      poblacion:e.target.value
    })
  }else{
    dispatch(changePage(1))
    dispatch(filterContinent(e.target.value))
    setfilter({
      ...filter,
      continente:e.target.value
    })
  }
  }
  const handleFilter=(e)=>{
    dispatch(changePage(1))
    dispatch(filterByActivities(e.target.value))
    setfilter({
      ...filter,
      actividad:e.target.value
    })
  }


  const clear=()=>{
    dispatch(changePage(1))
    dispatch(cleanState())
    setfilter({
      order:"",
      poblacion:"",
      continente:"",
      actividad:""
    })
   }
  return (
    <div className={s.NavBar}>

      <div className={s.log}>
        <Link to="/">
          <p className={s.logo}></p>
        </Link>
      </div>
       <div className={s.navUp}>
     
       <div className={s.SerchBar}> 
        <SerchBar />
       </div> 

        <div className={s.links}>
        <button  onClick={()=>history.push("/home")} className={s.Link} to="/home">Inicio</button>
        <button onClick={()=>history.push("/home/activity")}className={s.Link} >Nueva actividad</button>
        </div>
      
      </div>
     <div className={s.selects}>
      <div>
        <select className={s.filterSelect} value={filter.actividad} onChange={handleFilter}>
          <option hidden>Por actividad:</option>
          {allActivities.length>0 &&
           allActivities.map((activity)=>{
             return <option key={activity.id} value={activity.name}>{activity.name}</option>
            })}
        </select>
      </div>
        <div>
          <select className={s.filterSelect} value={filter.continente} onChange={handleChangeOrder}>
            <option hidden>Por continente: </option>
            <option value="Africa">Africa</option>
            <option value="Antarctic">Antartida</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="North America">America del norte</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">America del sur</option>
          </select>
        </div>
        <div>
          <select className={s.filterSelect} value={filter.order} onChange={handleChangeOrder}>
            <option hidden>Por orden: </option>
            <option value="ASC">A-Z</option>
            <option value="DESC">Z-A</option>
          </select>
        </div>
        <div>
          <select className={s.filterSelect} value={filter.poblacion} onChange={handleChangeOrder}>
            <option hidden>Por poblacion </option>
            <option value="PASC">Mayor poblacion</option>
            <option value="PDESC"> Menor poblacion</option>
          </select>
       
        </div>
      <button className={s.Link} type="submit"  onClick={clear}>Todos los paises</button>
      </div>  
    </div>
  );
};

export default NavBar;
