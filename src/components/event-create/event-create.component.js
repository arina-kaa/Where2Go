import React, { useState } from "react";
import axios from "axios";


const EventCreate = (props) => {
  const [shortDescription, setShortDescription] = useState('');
  const [description, setDescription] = useState('');
  const handleShortDescriptionChange = (event) => {
    setShortDescription(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
    const eventObject = {
      createdBy: "5deb6c6c1c9d440000014893",
      title: formElements.title.value,
      datetime: new Date(formElements.datetime.value),
      address: formElements.address.value,
      phone: formElements.phone.value,
      shortDescription: formElements.shortDescription.value,
      description: formElements.description.value,
      cost: formElements.cost.value,
      tags: formElements.tags.value,
      ageLimit: formElements.ageLimit.value,
    };
    axios.post('http://localhost:5000/events/add', eventObject)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      });
  };

  return(
    <div className="container">
      <h1>Добавление события</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">Название события</label>
          <div className="col-sm-10">
            <input type="title" className="form-control" id="title" placeholder="Название события" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="datetime" className="col-sm-2 col-form-label">Дата проведения</label>
          <div className="col-sm-10">
            <input type="datetime" className="form-control" id="datetime" placeholder="Дата проведения" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address" className="col-sm-2 col-form-label">Адрес</label>
          <div className="col-sm-10">
            <input type="address" className="form-control" id="address" placeholder="Адрес" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phone" className="col-sm-2 col-form-label">Телефон</label>
          <div className="col-sm-10">
            <input type="phone" className="form-control" id="phone" placeholder="Телефон" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="shortDescription" className="col-sm-2 col-form-label">Краткое описание</label>
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
            <input type="cost" className="form-control" id="cost" placeholder="Стоимость" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="tags" className="col-sm-2 col-form-label">Теги</label>
          <div className="col-sm-10">
            <input type="tags" className="form-control" id="tags" placeholder="Теги" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="ageLimit" className="col-sm-2 col-form-label">Возр. ограничение</label>
          <div className="col-sm-10">
            <input type="ageLimit" className="form-control" id="ageLimit" placeholder="Возрастное ограничение" />
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
            <button type="submit" className="btn btn-primary">Добавить событие</button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default EventCreate;