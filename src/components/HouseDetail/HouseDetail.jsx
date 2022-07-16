import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCard from "../CharacterCard/CharacterCard";
import { getHouse } from "../../redux/actions/index";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {

  // const {id} = useParams();

  // const [houses, setHouses] = React.useState(character);
  const character = useSelector(state => state.house);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getHouse(props.match.params.houseId))
  },[]);
   
  
    
    return (
        <div>
          {character.characters.map(c => {
            <CharacterCard 
            key={c.id}
            id={c.id}
            fullName={c.fullName}
            title={c.title}
            family={c.family}
            imageUrl={c.imageUrl}
            houseId={c.houseId}
          />
          })}
        </div>
    );
};

export default HouseDetail;
