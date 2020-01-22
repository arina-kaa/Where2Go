import React, {useState, useEffect} from 'react';
import moment from "moment/moment";
import 'moment/locale/ru';
import momentLocalizer from "react-widgets-moment";
import {getEventById} from '../../api/event';
import './style.scss'

const Event = (props) =>
{
    const [event, setEvent] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(() =>
        {
            moment.locale('ru');
            momentLocalizer();
            getEventById(props.match.params.code)
                .then(res =>
                {
                    setEvent(res);
                    setLoad(true);
                })
                .catch(err =>
                {
                    setError(err);
                    setLoad(true)
                })
        }, [props]
    );

    if (load)
    {
        return (
            <div className="container event">
                <h1 className="event-title">{event.title}</h1>
                {(event.tags)
                    ? <div className="event-tags">
                        {event.tags.map((tag, key) => (
                            <span key={key} className="badge badge-pill badge-success event-tag">{tag}</span>
                        ))}
                        </div>
                    : null
                }
                {(event.short_description)
                    ? <div className="row">
                        <p className="col-sm-2"><strong>Краткое описание:</strong></p>
                        <p className="col-sm-10">{event.short_description}</p>
                    </div>
                    : null
                }
                {(event.image_path) ? <img src={event.image_path} className="event-image" alt={event.title} /> : null}
                <h2 className="event-subtitle">Описание</h2>
                {(event.datetime)
                    ? <div className="row">
                        <p className="col-sm-2"><strong>Дата и время:</strong></p>
                        <p className="col-sm-10">{moment(event.datetime).format('LLL')}</p>
                    </div>
                    : null
                }
                {(event.address)
                    ? <div className="row">
                        <p className="col-sm-2"><strong>Адрес:</strong></p>
                        <p className="col-sm-10">{event.address}</p>
                    </div>
                    : null
                }
                {(event.description)
                    ? <div className="row">
                        <p className="col-sm-2"><strong>Подробное описание:</strong></p>
                        <p className="col-sm-10">{event.description}</p>
                    </div>
                    : null
                }
                <div className="row">
                    <p className="col-sm-2"><strong>Стоимость:</strong></p>
                    <p className="col-sm-10">{(event.cost > 0) ? event.cost : 'Бесплатно'}</p>
                </div>
                {(event.age_limit)
                    ? <div className="row">
                        <p className="col-sm-2"><strong>Возрастное ограничение:</strong></p>
                        <p className="col-sm-10">{event.age_limit}</p>
                    </div>
                    : null
                }
            </div>
        );
    } else if (error)
    {
        return (
            <p>{error.message}</p>
        );
    } else
    {
        return (
            <div>
                Loading...
            </div>
        );
    }
};

export default Event;