const paginado = (paises) => {
  const arr = [];
  const paisestwo = paises.slice(9, paises.length);
  const maxpage = 1 + Math.ceil((paises.length - 9) / 10);
  for (let i = 0; i < maxpage; i++) {
    if (i === 0) {
      arr.push({ pageinfo: {currentpage: 1,totalPages: maxpage, nextpage: maxpage > 1 ? true : false, },paises: paises.slice(0, 9),});
    } else {
      arr.push({pageinfo: {currentpage: i + 1,totalPages: maxpage,nextpage: maxpage > i + 1 ? true : false,},paises: paisestwo.slice((i - 1) * 10, i * 10)});
    }
  }
  return arr;
};



export default paginado;
