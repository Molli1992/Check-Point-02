import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCard from "../CharacterCard/CharacterCard";
import { createHouse } from "../../redux/actions/index";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
  const [house, setHouse] = React.useState({
    name: "",
    region: "",
    words: ""
  });

  const dispatch = useDispatch();

 const handleInput = (e) => {
  setHouse({...house, [e.target.name] : e.target.value})
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(createHouse(house));
 };

  return (

    <div>
      <form onSubmit={(e) => handleSubmit(e)}>

        <label htmlFor='house_name'>Name: </label>
        <input type="text" name='name' id='house_name' value={house.name} onChange={(e) => {handleInput(e)}}></input>

        <label htmlFor='house_region'>Region: </label>
        <input type="text" name='region' id='house_region' value={house.region} onChange={(e) => {handleInput(e)}}></input>
        <label htmlFor='house_words'>Words: </label>

        <input type="text" name='words' id='house_words' value={house.words} onChange={(e) => {handleInput(e)}}></input>
        <button type='submit'>Create</button>

      </form>
    </div>

  );
};

export default CreateHouse;



///////


/* function mapStateToProps(state) {
    return {
      movies: state.moviesLoaded
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
      getMovies: title => dispatch(getMovies(title))
    };
  } */
