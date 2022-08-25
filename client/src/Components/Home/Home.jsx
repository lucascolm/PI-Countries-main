import React,{ useEffect,useState } from 'react'
import{useDispatch,useSelector}from "react-redux"
import { getAllCountries,removeSearch } from '../../redux/actions'
import Card from "../Card/Card"
import Paginado from '../Paginado/Paginado'
//import NavBar from '../NavBar/NavBar'

const Home = () => {
 const auxCountries=useSelector((state)=>state.allCountries)
 const countriesN=useSelector((state)=>state.contriesByName)
 const dispatch=useDispatch()
  
//Paginado
const[page,setPage]=useState(1)
const showPerPage=10;
const lastOnPage=page * showPerPage;
const firstOnPage=lastOnPage-showPerPage;
console.log(firstOnPage,lastOnPage)

const showCountries=auxCountries.slice(firstOnPage,lastOnPage);
// console.log(showCountries)

function paginado(pageNumber){
  console.log(showCountries)
  return setPage(pageNumber)
}


 useEffect(()=>{
  dispatch(removeSearch())
  dispatch(getAllCountries())

 },[dispatch])

{/* <Paginado showPerPage={showPerPage} allCountries={auxCountries.length} paginado={paginado}/> */}
  return (
    <div className='home'>
      
      {
      countriesN.length>0?typeof countriesN=='string'?
      <p>no se encontro el pais</p>:
      countriesN.map(c=>{
        return(
        <div key={c.id}>
        <Card
        key={c.id}
        id={c.id}
        name={c.name}
        flag={c.flag}
        continent={c.continent}
        />
        </div>
      )})
      :  showCountries.length>0? showCountries.map(c=>
          <Card
          key={c.id}
          id={c.id}
          name={c.name}
          flag={c.flag}
          continent={c.continent}
          />
         
        
      ):"no hay paises" }
    <Paginado showPerPage={showPerPage} allCountries={auxCountries.length} paginado={paginado}/>
    </div>
  )
}
export default Home;