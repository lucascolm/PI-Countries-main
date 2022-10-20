import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesById, cleanState } from "../../redux/actions";
import s from "./CardDetail.module.css";
const CardDetail = (props) => {
  const paramsId = props.match.params.id;
  const country = useSelector((state) => state.countryById);
  //const isloading = useSelector((state) => state.isLoading);
  const {
    name,
    flag,
    continent,
    capital,
    subregion,
    area,
    population,
    activities,
  } = country;
  const dispatch = useDispatch();

  const desmontar = () => {
    dispatch(cleanState());
  };
  useEffect(() => {
    dispatch(getCountriesById(paramsId));

    return desmontar;
  }, [dispatch, paramsId]);

  return (
    <>
      {/* {isloading ? (
        <h2>Loading...</h2>
      ) : ()} */}
      <div className={s.details}>
        <div className={s.detailCard} key={paramsId}>
          <div className={s.countryInfo}>
            <img className={s.detailImg} src={flag} alt={name}></img>
          </div>
          <div className={s.countryInfo}>
            <h1 className={s.detailName}> {name}</h1>
          </div>
          <div className={s.divider}>
            <div className={s.countryInfo}>
              <p className={s.detailId}>Id: {paramsId}</p>
            </div>
            <div className={s.countryInfo}>
              <p className={s.detailContinet}>Continente: {continent}</p>
            </div>
            <div className={s.countryInfo}>
              <p className={s.detailCapital}>Capital: {capital}</p>
            </div>
          </div>
          <div className={s.divider}>
            <div className={s.countryInfo}>
              <p className={s.detailSubR}>Subregion: {subregion}</p>
            </div>
            <div className={s.countryInfo}>
              <p className={s.detailArea}>Area:{area}[km^2]</p>
            </div>
            <div className={s.countryInfo}>
              <p className={s.detailPopulation}>Poblacion: {population}</p>
            </div>
          </div>
          <h3>actividades</h3>
          <div className={s.actividades}>
            {activities && activities.length ? (
              activities.map((a) => (
                <div className={s.activitiesCard}>
                  <h4>Actividad:{a.name}</h4>
                  <p>Dificultad:{a.difficulty}</p>
                  <p>Duracion:{a.duration}hs</p>
                  <p>Temporada:{a.season}</p>
                </div>
              ))
            ) : (
              <p>No hay actividades registradas...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
