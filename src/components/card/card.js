import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {setLikedEventIdByUser, insetLikedEventIdByUser} from '../../api/userEvents';
import './style.scss'

const Card = (props) =>
{
    const [isLiked, setLike] = useState(props.card_info.is_liked);
    const handleLike = () =>
    {
        setLike(true);
        setLikedEventIdByUser(props.card_info._id);
    };
    const handleDislike = () =>
    {
        setLike(false);
        insetLikedEventIdByUser(props.card_info._id);
    };

    return (
        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card">
                {(props.card_info.image_path) ? <img src={props.card_info.image_path} className="card-img-top"
                                                     alt={props.card_info.title} /> : null}
                <div className="card-body">
                    <h5 className="card-title">{props.card_info.title}</h5>
                    <p className="card-text">{props.card_info.short_description}</p>
                    <Link to={"/event/" + props.card_info._id} className="btn btn-outline-success">Перейти</Link>
                    {(props.with_like_button) ?
                        (isLiked)
                            ? <i className="icon ion-md-heart" onClick={handleDislike}> </i>
                            : <i className="icon ion-md-heart-empty" onClick={handleLike}> </i>
                        : null
                    }
                </div>
            </div>
        </div>
    )
};

export default Card;