import React from 'react';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
const CharacterCard = (props) => {
    
    return (
        <div>
          <img src={character.imageUrl} alt=""/>
          <p>ID: {character.id}</p>
          <p>Name: {character.fullName}</p>
          <p>Title: {character.title}</p>
          <p>Family: {character.family}</p>
        </div>
    );
};

export default CharacterCard;
