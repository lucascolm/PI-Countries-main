import { GET_ALL_COUNTRIES,GET_COUNTRIES_BY_NAME,GET_COUNTRIES_BY_ID,POST_ACTIVITY,REMOVE_SEARCH,CLEAN_STATE, isLoading} from "../actions";
const initialState ={
    allCountries:[],
    countryById:{},
    contriesByName:[],
    activitis:[] ,  
    isLoading:false
};


  function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                allCountries:action.payload
            }
        case GET_COUNTRIES_BY_NAME:
            return{
                ...state,
                contriesByName:action.payload
            } 
        case GET_COUNTRIES_BY_ID:
            return{
                ...state,
                countryById:action.payload

            }   
        case POST_ACTIVITY:
            return{
              ...state  
            }
        case REMOVE_SEARCH:
            return{
                ...state,
                contriesByName:[]
            }
        case CLEAN_STATE:
            return{
                ...state,
                countryById:{}
            }  
        case "IS_LOADING":
            return{
                ...state,
                
            }
        default:return state
    }
    
}

export default rootReducer;
