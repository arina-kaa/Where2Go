import React/*, { useState, useEffect }*/ from 'react';

const Event = (props) => {
  return(
    <h1>{props.match.params.code} event</h1>
  )
};

export default Event;