
// Importa las actions types que necesites acá:
import { GET_ALL_HOUSES, CREATE_HOUSE, GET_HOUSE, DELETE_HOUSE } from "../actions";


const initialState = {
  houses: [],
  house: {},
};

const rootReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_HOUSES) {
    return {
      ...state,
      houses: state.houses.concat(action.payload)
    };
};

if (action.type === CREATE_HOUSE) {
  return {
    ...state,
    houses: [...state.houses, action.payload]
  };
};

if (action.type === GET_HOUSE) {
    return {
      ...state,
      house: action.payload
    };
};

if (action.type === DELETE_HOUSE) {
  return {
    ...state,
    houses: state.houses.filter(house => house.id !== action.payload)
};
};

return state;

};

export default rootReducer;













/* import { GET_MOVIES, GET_MOVIES_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from "../actions";


const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };


  function rootReducer(state = initialState, action) {

    if (action.type === ADD_MOVIE_FAVORITE) {
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload)
      };
  };

  if (action.type === REMOVE_MOVIE_FAVORITE) {
    return {
      ...state,
      moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.payload)
    };
  };

  if (action.type === GET_MOVIES) {
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
  };

  if (action.type === GET_MOVIES_DETAIL) {
    return {
      ...state,
      movieDetail: action.payload
  };
};

return state;

};

    
  
  export default rootReducer; */