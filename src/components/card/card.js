import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {setLikedEventIdByUser, insetLikedEventIdByUser} from '../../api/userEvents';
import momentLocalizer from 'react-widgets-moment';
import moment from 'moment/moment';
import './style.scss'

const Card = (props) => {
  let history = useHistory();
  moment.locale('ru');
  momentLocalizer();
  const [isLiked, setLike] = useState((props.card_info.is_liked) ?? false);
  const [imageStyle] = useState(
    (props.card_info._id)
      ? {backgroundImage: 'url("' + props.card_info.image_path + '")'}
      : null
  );

  const handleLike = () => {
    if (localStorage.usertoken) {
      setLike(true);
      setLikedEventIdByUser(props.card_info._id);
    } else {
      history.push('/user/login');
    }
  };
  const handleDislike = () => {
    if (localStorage.usertoken) {
      setLike(false);
      insetLikedEventIdByUser(props.card_info._id);
    }
  };

  return (
    <div className='card'>
      {
        (props.card_info.image_path)
        ? <div className='card-img-top' style={imageStyle}> </div>
        : null
      }
      <div className='card-body'>
        <h5 className='card-title'>{props.card_info.title}</h5>
        <p className='card-text'>{props.card_info.short_description}</p>
        <p className='card-time'>{moment(props.card_info.datetime).format('llll')}</p>
        <Link to={'/event/' + props.card_info._id} className='btn btn-outline-success'>Перейти</Link>
        {(props.with_like_button) ?
          (isLiked)
            ? <i className='icon ion-md-heart' onClick={handleDislike}> </i>
            : <i className='icon ion-md-heart-empty' onClick={handleLike}> </i>
          : null
        }
      </div>
    </div>
  )
};

export default Card;