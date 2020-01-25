import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import CardList from '../../components/card-list/card-list';
import {getLikedEventsByUser} from '../../api/userEvents';

const UserProfileLikedEvents = () => {
  const [likedEvents, setLikedEvents] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
      getLikedEventsByUser()
        .then(res => {
          res.map((event) => event.is_liked = true);
          setLikedEvents(res);
          setLoad(true);
        })
        .catch(err => {
          setError(err);
          setLoad(true)
        });
    }, []
  );

  if (load) {
    return (
      <div className='container'>
        <h1>Понравившиеся события</h1>
        {
          likedEvents
            ? <CardList items={likedEvents}/>
            : <p>Вы еще не создали ни одного события. <Link to='/event/create'>Создать событие</Link></p>
        }
      </div>
    );
  } else if (error) {
    return (
      <p>{error.message}</p>
    );
  } else {
    return (
      <div>
        Loading...
      </div>
    );
  }
};

export default UserProfileLikedEvents;