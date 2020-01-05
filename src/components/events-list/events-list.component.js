import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../card/card.component";

import './style.scss'

const EventsList = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/events')
      .then(res => {
        setEvents(res.data)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);

  return(
    <div>
      {events.map((event, key) => (
        <Card key={key} code={event.code} title={event.title} shortDescription={event.shortDescription} />
      ))}
    </div>
  )
};

export default EventsList;