import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesById,cleanState } from "../../redux/actions";

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
  
  const desmontar=()=>{
    dispatch(cleanState())
  }
  useEffect(() => {
    dispatch(getCountriesById(paramsId));

    
    return desmontar
  }, [dispatch, paramsId]);

  return (
    <>
      {/* {isloading ? (
        <h2>Loading...</h2>
      ) : ()} */}
        <div className="details">
          CardDetail
          <div className="detailCard" key={paramsId}>
            <img src={flag} alt={name}></img>
            <h1>Pais: {name}</h1>
            <h3>Id:{paramsId}</h3>
            <p>Continete:{continent}</p>
            <p>Capital:{capital}</p>
            <p>Subregion:{subregion}</p>
            <p>Area:{area}[km^2]</p>
            <p>Poblacion:{population}</p>
            <div>
              <h4>actividades</h4>
              <ul>
                {activities && activities.length ? (
                  activities.map((a) => (
                    <li key={a.id}>
                      {a.name} Duracion={a.duration} Dificultad={a.difficulty}
                    </li>
                  ))
                ) : (
                  <p>No Hay actividades</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default CardDetail;
