import React from 'react'

import { Card } from '../card/card.component';

import './card-list.styles.css';

// We pass the monsters inside the props. At this point is the cardlist that is responsible fro creating the cards
// The cardlist is not responsible for the way the component looks (card component)
export const CardList = (props) => {

    return <div className='card-list'>
        {// Map returns to us the Return of any function iterated over all the elements (objects or not) in monsters
        props.monsters.map(monster => (
          // Key is needed in case we need to update the value in the array
          <Card key={monster.id} monster={monster}/>
        ))};
          
    </div>;
}