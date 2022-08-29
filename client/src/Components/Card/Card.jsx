import React from "react";
import { Link } from "react-router-dom";
import s from "./Card.module.css"

const Card = ({ id, name, flag, continent }) => {
  return (
    <Link to={`/home/countries/${id}`} className="linkToDetail">
      <div className={s.card}>
        <div className={s.cardContent} key={id}>
          <img src={flag} alt={"country-img"} className={s.flagImg} />
          <div className={s.infoCard}>
            <h1  className={s.title}>{name}</h1>
            <p className={s.continent}>Continente:{continent}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
