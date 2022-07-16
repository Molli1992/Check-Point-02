import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX , JUNTO A MAP_DISPATCH_TO_PROPS! <3
export class HouseCard extends Component {

  /*constructor(props){
    super(props);
  };*/

  handleClick(e, id){
    e.preventDefault();
    this.props.deleteHouse(id);
  }

    render() {

        return (
            <div>
                <button onClick={(e) => this.handleClick(e, this.props.id)}>X</button>
                <h3>{this.props.name}</h3>
                <p>Region: {this.props.region}</p>
                <p>Words: {this.props.words}</p>
                <Link to={`/houses/${this.props.id}`}>{this.props.name}</Link>
            </div>
        );
    };
};


export const mapDispatchToProps = {
  deleteHouse: (id) => dispatch(deleteHouse(id))
}
   

export default connect(null, mapDispatchToProps)(HouseCard);




///

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
