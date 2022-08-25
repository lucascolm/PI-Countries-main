import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {getCountryByName,removeSearch} from '../../redux/actions'
 const SerchBar = () => {

  const [name,setName]=useState("")
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getCountryByName(name))
  },[name,dispatch]);
  // const handleclick=(e)=>{
  //   dispatch(getCountryByName(name))
  //   setName("")
  // }

  const clear=()=>{
   dispatch(removeSearch())
   setName("")
  }
  return (
    <div>
      <input
      className='searchbarComp'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      type='text'
      placeholder="buscar paises...">
      </input>
      {/* <button className='serchBarBtn' onClick={handleclick}>Buscar</button> */}
      <button onClick={clear}>Clear</button>
    </div>
  )
}

export default SerchBar;