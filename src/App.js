import { Route } from "react-router-dom";
import CreateHouse from "./components/CreateHouse/CreateHouse";
import HouseDetail from "./components/HouseDetail/HouseDetail";
import Houses from "./components/Houses/Houses";
import Nav from "./components/Nav/Nav";


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Route exact path="/" component={Houses} />
          <Route path="/houses/:houseId" component={HouseDetail} />
          <Route path="/house/create" component={CreateHouse}/>
    </div>
  );
}

export default App;











/* import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
      </React.Fragment>
  );
}

export default App; */
