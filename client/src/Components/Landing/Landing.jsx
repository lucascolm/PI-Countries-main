import React from "react";
import{Link} from 'react-router-dom'

export default function Landing() {
  return (
    <div>Landing
    <Link to="/home">
    <button>Home</button>
    </Link>
    </div>
  )
}
// const Landing = () => {
//   return <div></div>;
// };
// export default Landing;
