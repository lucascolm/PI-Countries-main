import React from "react";
import { Link } from "react-router-dom";
import s from "./Landing.module.css";
export default function Landing() {
  return (
    <div className={s.landingPage}>
      <div className={s.welcome}>
      <h1 className={s.welcomeText}>Welcome to My Countries App</h1>
      </div>
      <div className={s.divider}>
        <div className={s.dividerinfo}>
          <h1 className={s.titulo}>Comienza tu viaje con un solo click</h1>
          <Link className={s.linkLanding} to="/home">
            <button className={s.landingbtn}>Comenzar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
// const Landing = () => {
//   return <div></div>;
// };
// export default Landing;
