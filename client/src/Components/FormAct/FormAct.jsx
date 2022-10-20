import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import validate from "./validate";
import {postactivity} from '../../redux/actions/index'
import s from "./FormAct.module.css";

const FormAct = () => {
  // let newarr;
  const auxCountries = useSelector((state) => state.allCountries);
  const dispatch=useDispatch();
  const history=useHistory();
  const [error,setErrors]=useState({})
  const [activity, setActivity] = useState({
    name: '',
    difficulty: 0,
    duration: 0,
    season: '',
    countries: []
  });
  
  function setDisabled(){
    if(activity.name===''||
       activity.difficulty===0||
       activity.duration===0  ||
       activity.season===''||
       activity.countries===[]){
        return  true;
        }else{
          return false;
        }
  }
 
  const handleChange = (e) => {

    setActivity({
      ...activity,
      [e.target.name]:e.target.value

    });
    setErrors(validate({
      ...activity,
      [e.target.name]:e.target.value
    }))

  };
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postactivity(activity))
    alert("actividad creada correctamente")
    setActivity({
      name: '',
          difficulty: '',
          duration: '',
          season: '',
          countries: []
      });
    history.push("/home")
    
  };


 const handleSelectSeason=(e)=>{
    setActivity({
      ...activity,
      season:e.target.value
    });
    setErrors(validate({
      ...activity,
      season:e.target.value
    }))
  }
  const handleSelectCountry = (e) => {
     console.log(auxCountries)
        setActivity({
          ...activity, 
          countries:[...activity.countries,e.target.value]
        });
        setErrors(validate({
          ...activity,
          countries:[...activity.countries,e.target.value]
        }))
      
    };
    function deleteCounty(e){
      setActivity({
          ...activity,
          countries: activity.countries.filter(country => country !== e.target.value)
      })
    }
    return (
      <div className={s.activity}>
      <div className={s.formAct}>
      <form className={s.form}onSubmit={handleSubmit}>
        <h1>Crea una actividad:</h1>
        <div>
        <label>Nombre: </label>
        <input className={s.formInput} type="text" name="name" value={activity.name} onChange={handleChange} />
          <label className={s.errorLabel} hidden={error.name?true:false}>{error.name}</label>
        </div>
        <div>
        <label>Dificultad: </label>
        <input  className={s.formInput} type="number" min="1" max="5" name="difficulty" value={activity.difficulty} onChange={handleChange} />
        <label className={s.errorLabel} hidden={error.difficulty?true:false}>{error.difficulty}</label>
        </div>
        <div>
        <label>Duracion: </label>
        <input className={s.formInput} type="number" min="1" max="24" name="duration" value={activity.duration} onChange={handleChange} />
        <label className={s.errorLabel} hidden={error.duration?true:false}>{error.duration}</label>
        </div>
        <div>
        <label>Temporada: </label>
        {/* <Select
          
          placeholder="Seleccionar"
          options={opciones.temporadas}
        /> */}
        <select className={s.formSelect} onChange={handleSelectSeason}>
          <option hidden>Selecciona una estacion: </option>
          <option value="Summer">Verano</option>
          <option value="Autumn">Otoño</option>
          <option value="Winter">Invierno</option>
          <option value="Spring">Primavera</option>
        </select>
        <label className={s.errorLabel} hidden={error.season?true:false}>{error.season}</label>
        </div>
        <div>
        <label>Paises: </label>
        <select className={s.formSelect} onChange={handleSelectCountry}>
          <option hidden>Selecciona un pais</option>
          {auxCountries.length > 0 &&
            auxCountries.filter((c)=>!activity.countries.includes(c.id)).map((c) => {
              return <option key={c.id} value={c.id}>{c.name}</option>;
            }) }
        </select>
        <label className={s.errorLabel} hidden={error.countries?true:false}>{error.countries}</label>
        </div>
        <div className={s.showcountries}>
            {activity.countries.map((country)=>{
              let img=auxCountries.find((c)=>c.id===country)
              return(
                <div className={s.eachCountry} key={country}>
                  {/* <p className={s.countryName}>{country}</p> */}
                  <img className={s.countryName} src={img.flag} alt="imagen" />
                  <button onClick={deleteCounty} className={s.closeBtn} value={country}>x</button>
                </div>
              )
            })}
        </div>
        <button disabled={setDisabled()} className={s.formBtn} type="submit">Agregar actividad</button>
      </form>
       
      </div>
    </div>
  );
};

export default FormAct;
