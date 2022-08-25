import React from "react";
import {Link} from "react-router-dom";



 const Card = ({id,name,flag,continent}) => {
  return (
    <Link to={`/home/countries/${id}`}className="linkToDetail">
      <div key={id}>
        <img src={flag} alt={'country-img'} className="flagImg" />
        <div className="infoCard">
        <h1 className="title">{name}</h1>
        <p className=" continet">{continent}</p>
        </div>
      </div>
    </Link>

  )
}
export default Card