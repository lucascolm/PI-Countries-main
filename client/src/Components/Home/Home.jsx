import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, removeSearch } from "../../redux/actions";
import Card from "../Card/Card";
import paginado from "./funciones";
import s from "./Home.module.css";

//import NavBar from '../NavBar/NavBar'

const Home = () => {
  const auxCountries = useSelector((state) => state.allCountries);
  const countriesN = useSelector((state) => state.contriesByName);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  //Paginado

  //console.log(firstOnPage,lastOnPage)

  // const showCountries=auxCountries.slice(firstOnPage,lastOnPage);
  // console.log(showCountries)

  useEffect(() => {
    dispatch(removeSearch());
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div className={s.home}>
      {/* {!auxCountries?null:<NavBar/>} */}
      <div className={s.cards}>
        {countriesN.length > 0 ? (
          typeof countriesN == "string" ? (
            <p>no se encontro el pais</p>
          ) : (
            paginado(countriesN)[page - 1].paises.map((c) => {
              return (
                <div key={c.id}>
                  <Card
                    key={c.id}
                    id={c.id}
                    name={c.name}
                    flag={c.flag}
                    continent={c.continent}
                  />
                </div>
              );
            })
          )
        ) : auxCountries.length > 0 ? (
          paginado(auxCountries)[page - 1].paises.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              name={c.name}
              flag={c.flag}
              continent={c.continent}
            />
          ))
        ) : (
          "no hay paises"
        )}
      </div>
      <div className={s.paginado}>
        {countriesN.length > 0 && typeof countriesN !== "string"
          ? paginado(countriesN).map((e, index) => {
              return (
                <button
                  onClick={() => {
                    setPage(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              );
            })
          : auxCountries.length > 0 &&
            paginado(auxCountries).map((e, index) => {
              return (
                <button
                  onClick={() => {
                    setPage(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
      </div>
    </div>
  );
};
export default Home;
