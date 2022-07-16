export const GET_ALL_HOUSES = "GET_ALL_HOUSES";
export const CREATE_HOUSE = "CREATE_HOUSE";
export const GET_HOUSE = "GET_HOUSE";
export const DELETE_HOUSE = "DELETE_HOUSE";

// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk

// Usar ruta 'http://localhost:3001/houses' para buscar todas las houses en nuestro back.
// Esto lo vas a poder hacer utilizando fetch.
// export const getAllHouses = () => dispatch => {};
export const getAllHouses = function() {
  return function(dispatch) {
    return fetch('http://localhost:3001/houses')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_ALL_HOUSES, payload: json });
      });
  };
};

// Usar ruta 'http://localhost:3001/houses/:id' para buscar una house por el id pasado
// como parámetro de la action creator.
// Donde :id, el id recibido como argumento de la action creator.
// Ojo, hacer un console.log de la respuesta desde el back. En nuestro reducer esperamos un objeto;
// export const getHouse = () => dispatch => {};
export const getHouse = function(id) {
  return function(dispatch) {
    return fetch(`http://localhost:3001/houses/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_HOUSE, payload: json });
      });
  };
};

// Inicializamos id en 3, para que nuestros próximos ID's no se pisen con los existentes.
// La vas a usar en la funcion createHouse, descomentala cuando te haga falta;
let id = 3;

// Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para crear la house.
export const createHouse = function(payload) {
return {
  type: CREATE_HOUSE,
  payload: {...payload, id: ++id}
}
};

// Desde el componente ejecutamos la action creator, pasandole como argumento el id de la house que queremos eliminar.
export const deleteHouse = function(id) {
  return { type: DELETE_HOUSE, payload: id };
};














/* export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
  };


  export function removeMovieFavorite(id) {
    return { type: REMOVE_MOVIE_FAVORITE, payload: id };
  };
  

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("https://www.omdbapi.com/?i=tt3896198&apikey=923e990d&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json });
        });
    };
  };


  export function getMoviesDetail(id) {
    return function(dispatch) {
      return fetch(`https://www.omdbapi.com/?apikey=923e990d&i=${id}&plot=full`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES_DETAIL, payload: json });
        });
    };
  }; */