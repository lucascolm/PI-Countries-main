import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, removeSearch,getAllActivities, changePage } from "../../redux/actions";
import Card from "../Card/Card";
import paginado from "./funciones";
import s from "./Home.module.css";

//import NavBar from '../NavBar/NavBar'

const Home = () => {
  let maxpage;
  
  const countriesFilter=useSelector((state) => state.countriesFilter)
  const auxCountries = useSelector((state) => state.allCountries);
  const countriesN = useSelector((state) => state.contriesByName);
  const page=useSelector((state) =>state.actualPage);
  const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  //Paginado

  //console.log(firstOnPage,lastOnPage)

  // const showCountries=auxCountries.slice(firstOnPage,lastOnPage);
  // console.log(showCountries)

  useEffect(() => {
    dispatch(removeSearch());
    dispatch(getAllCountries());
    dispatch(getAllActivities())
  }, [dispatch]);

 function nextpage(e){

  window.scrollTo(0,0)
  if(page<maxpage){
    dispatch(changePage(page+1))

  }else{
   alert("estas en la ultima pagina")
  }
 }


 function prevpage(e){
  if(page==1){
    alert("estas en la primera pagina")
  }else{
    window.scrollTo(0,0)
    dispatch(changePage(page-1))
  }
 }
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
        ):countriesFilter.length>0?paginado(countriesFilter)[page-1].paises.map((c) => (
          <Card
            key={c.id}
            id={c.id}
            name={c.name}
            flag={c.flag}
            continent={c.continent}
          />
        )) : auxCountries.length > 0 ? (

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
      <button onClick={prevpage}>anterior</button>
        {countriesN.length > 0 && typeof countriesN !== "string"
          ? paginado(countriesN).map((e, index) => {
            maxpage=e.pageinfo.totalPages
              return (
                <button
                  onClick={() => {
                    window.scrollTo(0,0)
                    dispatch(changePage(index+1))
                  }}
                >
                  {index + 1}
                </button>
              );
            })
          :countriesFilter.length>0? paginado(countriesFilter).map((e, index) => {
           maxpage=e.pageinfo.totalPages
           
            return (
              <button
                onClick={() => {
                  window.scrollTo(0,0)
                  dispatch(changePage(index+1))
                }}
              >
                {index + 1}
              </button>
            );
          }):auxCountries.length > 0 &&
          paginado(auxCountries).map((e, index) => {
            console.log(maxpage)
            maxpage=e.pageinfo.totalPages
            return (
              <button
              onClick={() => {
                window.scrollTo(0,0)
                dispatch(changePage(index+1))
              }}
              >
                  {index + 1}
                </button>
              );
            })}
            {/* console.log(e.pageinfo.totalPages) */}
          <button onClick={nextpage}>siguiente</button>
      </div>
    </div>  
  );
};
export default Home;
