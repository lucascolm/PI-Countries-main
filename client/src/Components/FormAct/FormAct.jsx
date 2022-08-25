import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import opciones from "./opciones";
import {postactivity} from '../../redux/actions/index'

const FormAct = () => {
  const dispatch=useDispatch();
  const history=useHistory();
  const [activity, setActivity] = useState({
    name: '',
    difficulty: 0,
    duration: 0,
    season: '',
    countries: []
  });
  const auxCountries = useSelector((state) => state.allCountries);
  // .map(c=>{
  //   return{
  //     value:c.id,
  //     label:c.name
  //   }
  // });
  const handleChange = (e) => {

    setActivity({
      ...activity,
      [e.target.name]:e.target.value

    })

  };
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postactivity(activity))
    alert("actividad creada correctamente")
    setActivity({})
    history.push("/home")
  };

  const handleSelect = (e) => {
   
      if(e.target.value.length===3){
        setActivity({
          ...activity, 
          countries:[...activity.countries,e.target.value]
        }) 
      }else{
        setActivity({
          ...activity, 
          season:e.target.value,
        })
      }
   
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" name="name" value={activity.name} onChange={handleChange} />
        <label>Dificultad: </label>
        <input type="number"min="1" max="5"name="difficulty" value={activity.difficulty} onChange={handleChange} />
        <label>Duracion: </label>
        <input type="number"min="1" max="24" name="duration" value={activity.duration} onChange={handleChange} />
        <label>Temporada: </label>
        {/* <Select
          
          placeholder="Seleccionar"
          options={opciones.temporadas}
        /> */}
        <select onChange={handleSelect}>
          <option>Seleccionar: </option>
          <option value="Summer">Verano</option>
          <option value="Autumn">Otoño</option>
          <option value="Winter">Invierno</option>
          <option value="Spring">Primavera</option>
        </select>
        <label>Paises: </label>
        {/* <Select
        placeholder="Seleccionar"
        options={auxCountries}
        isMulti
        closeMenuOnSelect={false}
        /> */}
        <select onChange={handleSelect}>
          {auxCountries.length > 0 &&
            auxCountries.map((c) => {
              return <option key={c.id} value={c.id}>{c.name}</option>;
            })}
        </select>
        <button type="submit">Agregar actividad</button>
      </form>
    </div>
  );
};

export default FormAct;
