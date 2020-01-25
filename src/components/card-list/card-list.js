import React from 'react';
import Masonry from 'react-masonry-css'
import Card from '../card/card';
import './style.scss'

const CardList = (props) => {
  const breakpointColumnsObj = {
    default: 4,
    992: 3,
    767: 2,
    540: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='masonry-grid'
      columnClassName='masonry-grid_column'
    >
      {props.items.map((event, key) => (
        <Card key={key} card_info={event} with_like_button={!props.without_like_button}/>
      ))}
    </Masonry>
  )
};

export default CardList;