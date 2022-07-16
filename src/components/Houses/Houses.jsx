import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HouseCard } from '../HouseCard/HouseCard';

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS 
// Y MAP_DISPATCH_TO_PROPS!! <3

export class Houses extends Component {
  /*constructor(props){
    super(props);
  };*/
  
  /* componentDidMount(){
    this.props.getAllHouses();
  };*/
  
    render() {
        return (
          <div>
            <h1>Game of Thrones</h1>
                   <img src="main-image-cp2.jpg" alt="main-img"/>
                   <h3>Houses</h3>
                     {
                          this.props.houses?.map((h) =>(
                          <HouseCard 
                           id={h.id}
                           region={h.region}
                           name={h.name}
                           words={h.words}
                           characters={h.characters}
                          />
                          ))
                     }
          </div>
        );
    };
};

export const mapStateToProps = function(state) {
    return {
      houses: state.houses
    };
  };

  export const mapDispatchToProps = {
    getAllHouses: (houses) => dispatch(getAllHouses(houses))
  };

export default connect(mapStateToProps, mapDispatchToProps)(Houses);




/* this.props.houses?.map((h) =>(
  <HouseCard 
  id={h.id}
  region={h.region}
  name={h.name}
  words={h.words}
  characters={h.characters}
  /> */









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
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Buscador); 

  <div>
                {this.props.houses?.map( h => {
                  return (
                    <HouseCard 
                    id={h.id}
                    region={h.region}
                    name={h.name}
                    words={h.words}
                    />
                  )
                })}
                </div> */
  

