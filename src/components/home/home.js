import React, {useState, useEffect} from 'react';
import CardList from '../../components/card-list/card-list';
import {getAllEvents} from '../../api/event';
import {getLikedEventIdsByUser} from '../../api/userEvents';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
      getAllEvents()
        .then(res => {
          if (localStorage.usertoken) {
            getLikedEventIdsByUser()
              .then(ids => {
                res.map((event) => {
                  const index = ids.indexOf(event._id);
                  if (ids.length === 0) event.is_liked = false;
                  else if (index !== -1) event.is_liked = true;
                  return null;
                });
                setEvents(res);
                setLoad(true);
              })
              .catch(err => setError(err))
          } else {
            setEvents(res);
            setLoad(true);
          }
        })
        .catch(err => setError(err))
    }, []
  );

  if (load) {
    return (
      <div className='container'>
        <h1>Все предстоящие события</h1>
        <CardList items={events}/>
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

export default EventList;