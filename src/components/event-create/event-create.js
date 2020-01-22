import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {validateUser} from "../../api/user";
import moment from 'moment';
import 'moment/locale/ru';
import momentLocalizer from 'react-widgets-moment';
import {DateTimePicker, Multiselect} from 'react-widgets';
import {getTagsList} from "../../utils/Tags";
import {handleFormSubmit} from "../../utils/forms/CreateEventForm";

import './style.scss';

const EventCreate = () =>
{
    let history = useHistory();
    useEffect(() =>
        {
            validateUser(history);
            moment.locale('ru');
            momentLocalizer();
        }, [history]
    );
    const [datetime, setDatetime] = useState(moment().format());
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const tagsList = getTagsList;
    const [tags, setTags] = useState();
    const [image, setFile] = useState();
    const handleDatetimeChange = (datetime) =>
    {
        setDatetime(datetime);
    };
    const handleShortDescriptionChange = (event) =>
    {
        setShortDescription(event.target.value);
    };
    const handleDescriptionChange = (event) =>
    {
        setDescription(event.target.value);
    };
    const handleTagsChange = (event) =>
    {
        setTags(event);
    };
    const handleFileChange = (event) =>
    {
        setFile(event.target.files[0]);
    };
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        validateUser(history);
        handleFormSubmit({
            fields: event.target.elements,
            datetime: datetime,
            tags: tags,
            image: image
        }).then(data =>
        {
            if (data.status === 200)
            {
                let submitButton = document.getElementById("submitBtn");
                submitButton.disabled = true;
                submitButton.innerText = "Добавлено"
            }
        });
    };

    return (
        <div className="container">
            <h1>Добавление события</h1>
            <form onSubmit={handleSubmit} name="eventCreate">
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Название события</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="datetime" className="col-sm-2 col-form-label">Дата проведения</label>
                    <div className="col-sm-10">
                        <DateTimePicker
                            format={'LLL'}
                            step={15}
                            onChange={handleDatetimeChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="address" className="col-sm-2 col-form-label">Адрес</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="address" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Телефон</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="phone" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="short_description" className="col-sm-2 col-form-label">Краткое описание</label>
                    <div className="col-sm-10">
            <textarea className="form-control" id="shortDescription" rows="2" value={shortDescription}
                      onChange={handleShortDescriptionChange}> </textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Подробное описание</label>
                    <div className="col-sm-10">
            <textarea className="form-control" id="description" rows="5" value={description}
                      onChange={handleDescriptionChange}> </textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="cost" className="col-sm-2 col-form-label">Стоимость</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="cost" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="tags" className="col-sm-2 col-form-label">Теги</label>
                    <div className="col-sm-10">
                        <Multiselect
                            dropUp
                            onChange={handleTagsChange}
                            data={tagsList}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="age_limit" className="col-sm-2 col-form-label">Возр. ограничение</label>
                    <div className="col-sm-10">
                        <select className="form-control" id="age_limit">
                            <option>0+</option>
                            <option>6+</option>
                            <option>12+</option>
                            <option>16+</option>
                            <option>18+</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="image" className="col-sm-2 col-form-label">Изображение</label>
                    <div className="col-sm-10">
                        <input type="file" className="form-control-file" id="image" onChange={handleFileChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button className="btn btn-success" id="submitBtn">Добавить событие</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default EventCreate;