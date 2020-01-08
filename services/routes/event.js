const express = require('express');
const events = express.Router();
let Event = require('../models/event');

events.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

events.route('/add').post((req, res) => {
  const created_by = req.body.created_by;
  const title = req.body.title;
  const datetime = Date.parse(req.body.datetime);
  const address = req.body.address;
  const phone = req.body.phone;
  const short_description = req.body.short_description;
  const description = req.body.description;
  const cost = req.body.cost;
  const tags = req.body.tags;
  const age_limit = req.body.age_limit;

  const newEvent = new Event({
    created_by,
    title,
    datetime,
    address,
    phone,
    short_description,
    description,
    cost,
    tags,
    age_limit
  });
  newEvent.save()
    .then(() => res.json('Event added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

events.route('/:id').get((res, req) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err))
});

events.route('/update/:id').post((res, req) => {
  Event.findById(req.params.id)
    .then(event => {
      event.created_by = req.body.created_by;
      event.title = req.body.title;
      event.datetime = Date.parse(req.body.datetime);
      event.address = req.body.address;
      event.phone = req.body.phone;
      event.short_description = req.body.short_description;
      event.description = req.body.description;
      event.cost = req.body.cost;
      event.tags = req.body.tags;
      event.age_limit = req.body.age_limit;

      event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = events;