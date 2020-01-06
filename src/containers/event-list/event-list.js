import React, { useState, useEffect } from 'react';
import CardList from '../../components/card-list/card-list';
import { getEvents } from '../../api/Event';

const EventList = (props) => {
  const [events, setEvents] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getEvents()
      .then(res => {
        setTimeout(() => {
          setEvents(res);
          setLoad(true);
        }, 100);
      })
      .catch(err => {
        setError(err);
        setLoad(true)
      })
  }, []);


  if (load) {
    return (<ul>
      {error ? <li>{error.message}</li> : <CardList items={events}/>}
    </ul>);
  } else {
    return (
      <div>
        Loading...
      </div>
    );
  }
};

export default EventList;