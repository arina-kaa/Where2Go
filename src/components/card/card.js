import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {setLikedEventIdByUser, insetLikedEventIdByUser} from '../../api/userEvents';
import momentLocalizer from "react-widgets-moment";
import moment from "moment/moment";
import './style.scss'

const Card = (props) =>
{
    const [isLiked, setLike] = useState(props.card_info.is_liked);
    const [imageId] = useState("image_" + props.card_info._id);

    useEffect(() =>
        {
            moment.locale('ru');
            momentLocalizer();
            if (props.card_info.image_path)
                document.getElementById(imageId).style.backgroundImage = "url('" + props.card_info.image_path + "')";
        }, [props, imageId]
    );

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
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                {(props.card_info.image_path)
                    ? <div id={imageId} className="card-img-top"> </div>
                    : null
                }
                <div className="card-body">
                    <h5 className="card-title">{props.card_info.title}</h5>
                    <p className="card-text">{props.card_info.short_description}</p>
                    <p className="card-time">{moment(props.card_info.datetime).format('llll')}</p>
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