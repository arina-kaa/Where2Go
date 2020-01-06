import React from 'react';
import Card from "../card/card";

import './style.scss'

const CardList = (props) => {
  return(
    <div>
      {props.items.map((event, key) => (
        <Card key={key} code={event.code} title={event.title} shortDescription={event.shortDescription} />
      ))}
    </div>
  )
};

export default CardList;