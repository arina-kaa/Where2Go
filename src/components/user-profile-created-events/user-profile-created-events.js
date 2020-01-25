import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import CardList from '../../components/card-list/card-list';
import {getCreatedEventsByUser} from '../../api/userEvents';

const UserProfileCreatedEvents = () => {
  const [createdEvents, setCreatedEvents] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
      getCreatedEventsByUser()
        .then(res => {
          setCreatedEvents(res);
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
        <h1>Мои события</h1>
        {
          createdEvents
            ? <CardList items={createdEvents} without_like_button={true}/>
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

export default UserProfileCreatedEvents;