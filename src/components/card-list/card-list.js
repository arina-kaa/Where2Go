import React, {useEffect, useState} from 'react';
import Card from "../card/card";

const CardList = (props) => {
    const [isWithLikeButton, setLikeButton] = useState(true);
    useEffect(() =>
        {
            if (props.without_like_button)
            {
                setLikeButton(false)
            }
        }, [props]
    );

  return(
      <div className="row">
          {props.items.map((event, key) => (
              <Card key={key} card_info={event} with_like_button={isWithLikeButton} />
          ))}
      </div>
  )
};

export default CardList;