/* eslint-disable no-unreachable */
const axios = require("axios");

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_COUNTRIES_BY_ID="GET_COUNTRIES_BY_ID"
export const POST_ACTIVITY="POST_ACTIVITY"
export const REMOVE_SEARCH="REMOVE_SEARCH"
export const CLEAN_STATE="CLEAN_STATE"

export const getAllCountries = () => {
  try {
      return function (dispatch) {
        console.log("estoy en las actions")
      return axios.get("http://localhost:3001/countries")
        .then((json) => dispatch({ type: GET_ALL_COUNTRIES, payload: json.data }) );
      }
    } catch (error) {
        console.log('Error action getAllCountries ' + error)
  };
};
export function removeSearch(){
  return {type:REMOVE_SEARCH,}
}
export function cleanState(){
  return {type:CLEAN_STATE}
}

export function getCountryByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      return dispatch({type:GET_COUNTRIES_BY_NAME,payload:json.data});
    } catch (error) {
  console.log('Error action getCountriesByName ' + error)
    }
  };
}

export function getCountriesById(id) {
    return async function (dispatch) {
        try{
          //dispatch(isLoading(true))
            var json = await axios.get(`http://localhost:3001/countries/${id}`);
           // dispatch(isLoading(false))
            return dispatch({type:GET_COUNTRIES_BY_ID,payload:json.data});
        }catch (error) {
console.log('Error action getCountryById ' + error)
        }
    }
}

export function postactivity(activity){
  console.log(activity)
    return async function(dispatch){
        try {
            var json = await axios.post(`http://localhost:3001/activity`,activity);
            console.log(json.data)
            return dispatch({type:POST_ACTIVITY,payload:json.data})
        } catch (error) {
            console.log('Error action postActivity ' + error)
        }
    }

}
export const isLoading = (value)=>(dispatch)=>{
  dispatch({type:"IS_LOADING",payload:value})
}

//  function getAllCountries (){

// try {
//     axios.get("http://localhost:3001/countries")
//         .then(json=>console.log(json.data))
// } catch (error) {
//     return `ocurrio un error: ${error.message}`;
// }
// }



// function getCountryByNamee(name) {
//   try {
//     axios
//       .get(`http://localhost:3001/countries?name=${name}`)
//       .then((json) => console.log(json.data));
//   } catch (error) {}
// }

// function getCountryByIdd(id){
//     try{
//         axios.get(`http://localhost:3001/countries/${id}`)
//         .then((json) => console.log(json.data));
//     }catch (error) {

//     }
// }

// function postact(activity){
//     try {
//         axios.post('http://localhost:3001/activity',activity)
//         .catch((error) => console.log(error));
//     } catch (error) {
//         return error.message;
//     }
// }

// let newActi={
//     name:"tenis",
//     difficulty:"5",
//     duration:"1",
//     season:"summer",
//     paises:["PER"]
// }
// //postact(newActi)
// //getCountryByIdd("PER");
