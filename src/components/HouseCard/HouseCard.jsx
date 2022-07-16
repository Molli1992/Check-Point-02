import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX , JUNTO A MAP_DISPATCH_TO_PROPS! <3
export class HouseCard extends Component {

    render() {

        return (
            <div>
                <button onClick={() => this.props.deleteHous(id)}></button>
                <h3>{}</h3>
                <p>Region: {}</p>
                <p>Words: {}</p>
                <Link to="/houses/:houseId">{}</Link>
            </div>
        );
    };
};

export const mapDispatchToProps = function(dispatch) {
    return {
        deleteHouse: id => dispatch(deleteHouse(id))
    };
  };

export default connect(null, mapDispatchToProps)(HouseCard);






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
