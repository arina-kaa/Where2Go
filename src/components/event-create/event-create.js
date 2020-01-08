import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addEvent } from '../../api/event';
import "./style.scss";


const EventCreate = (props) => {
  const [datetime, setDatetime] = useState(new Date());
  const [shortDescription, setShortDescription] = useState('');
  const [description, setDescription] = useState('');
  const handleDatetimeChange = (date) => {
    setDatetime(date);
  };
  const handleShortDescriptionChange = (event) => {
    setShortDescription(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addEvent(e.target.elements);
  };

  return(
    <div className="container">
      <h1>Добавление события</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">Название события</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="title" placeholder="Название события" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="form-group row">
              <label htmlFor="date" className="col-sm-4 col-form-label">Дата проведения</label>
              <div className="col-sm-8">
                <DatePicker className="form-control" id="date" selected={datetime} onChange={handleDatetimeChange}/>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="form-group row">
              <label htmlFor="time" className="col-sm-4 col-form-label">Время проведения</label>
              <div className="col-6 col-sm-4">
                <select className="form-control" id="timeHours">
                  {[...Array(24)].map((x, i) =>
                    <option key={i}>{i}</option>
                  )}
                </select>
              </div>
              <div className="col-6 col-sm-4">
                <select className="form-control" id="timeMinutes">
                  {[...Array(12)].map((x, i) =>
                    <option key={i * 5}>{i * 5}</option>
                  )}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address" className="col-sm-2 col-form-label">Адрес</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="address" placeholder="Адрес" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phone" className="col-sm-2 col-form-label">Телефон</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="phone" placeholder="Телефон" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="short_description" className="col-sm-2 col-form-label">Краткое описание</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="short_description" rows="2" value={shortDescription}
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
            <input type="text" className="form-control" id="cost" placeholder="Стоимость" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="tags" className="col-sm-2 col-form-label">Теги</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="tags" placeholder="Теги" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="ageLimit" className="col-sm-2 col-form-label">Возр. ограничение</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="age_limit" placeholder="Возрастное ограничение" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="image" className="col-sm-2 col-form-label">Изображение</label>
          <div className="col-sm-10">
            <input type="file" className="form-control-file" id="image" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-success">Добавить событие</button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default EventCreate;