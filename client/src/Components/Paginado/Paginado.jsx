import React from "react";


 const Paginado = ({showPerPage,allCountries,paginado}) => {
  const pageNumbers=[]
  for(let i=1; i<=Math.ceil(allCountries/showPerPage);i++){
    pageNumbers.push(i)
  }
  
  return (
    <div>
      {pageNumbers&&pageNumbers.map(n=>
        <div key={n}>
          <button onClick={()=>paginado(n)}>{n}</button>
        </div>
        )}
    </div>
  )
}
export default Paginado;
