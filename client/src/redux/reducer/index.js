import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRIES_BY_ID,
  POST_ACTIVITY,
  REMOVE_SEARCH,
  CLEAN_STATE,
  isLoading,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  FILTER_CONTINENT,
  GET_ALL_ACTIVITIES,
  FILTER_BY_ACTIVITIES,
  CHANGE_PAGE,
  changePage
} from "../actions";
const initialState = {
  allCountries: [],
  countriesFilter: [],
  countryById: {},
  contriesByName: [],
  activities: [],
  actualPage:1
  // isLoading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        // countriesFilter: action.payload,
      };
    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities:action.payload
      };
    case GET_COUNTRIES_BY_NAME:
      if (action.payload) {
        return {
          ...state,
          contriesByName: action.payload,
        };
      } else {
        return {
          ...state,
          contriesByName: [],
        };
      }
    case GET_COUNTRIES_BY_ID:
      return {
        ...state,
        countryById: action.payload,
      };
    case POST_ACTIVITY:
      return {
        ...state,
      };
    case REMOVE_SEARCH:
      return {
        ...state,
        contriesByName: [],
      };
    case CLEAN_STATE:
      return {
        ...state,
        countryById: {},
        countriesFilter: [],
      };
    case "IS_LOADING":
      return {
        ...state,
      };

    case ORDER_BY_NAME:
      let filterName;
      console.log(action.payload);
      if (action.payload === "ASC") {
        filterName = [...state.allCountries].sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
      } else {
        filterName = [...state.allCountries].sort((a, b) => {
          return a.name < b.name ? 1 : -1;
        });
      }
      return {
        ...state,
        countriesFilter: filterName,
      };
    case ORDER_BY_POPULATION:
      let filterPop;
      action.payload === "PASC"
        ? (filterPop = [...state.allCountries].sort((a, b) => {
            return b.population - a.population;
          }))
        : (filterPop = [...state.allCountries].sort((a, b) => {
            return a.population - b.population;
          }));
      return {
        ...state,
        countriesFilter: filterPop,
      };
    case FILTER_CONTINENT:
      const matched = state.allCountries.filter(
        (i) => i.continent == action.payload
      );
      return {
        ...state,
        countriesFilter: matched,
      };
      case FILTER_BY_ACTIVITIES:
          let filterByAct=state.activities.find((activity)=>activity.name===action.payload)
        return{
          ...state,
          countriesFilter: filterByAct.countries
        };
      case CHANGE_PAGE:
        return{
          ...state,
          actualPage: action.payload
      }

    default:
      return state;
  }
}

export default rootReducer;
