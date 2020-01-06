import React/*, { useState, useEffect }*/ from 'react';
import {Link} from 'react-router-dom';
import './style.scss'

function Card (props) {
  return(
    <div className="card">
      {(props.img) ? <img src={props.img} className="card-img-top" alt={props.title} /> : null}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.shortDescription}</p>
        <Link to={"/events/" + props.code} className="btn btn-primary">Перейти</Link>
      </div>
    </div>
  )
}

export default Card;