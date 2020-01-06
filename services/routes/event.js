const router = require('express').Router();
let Event = require('../models/event');

router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const createdBy = req.body.createdBy;
  const title = req.body.title;
  const datetime = Date.parse(req.body.datetime);
  const address = req.body.address;
  const phone = req.body.phone;
  const shortDescription = req.body.shortDescription;
  const description = req.body.description;
  const cost = req.body.cost;
  const tags = req.body.tags;
  const ageLimit = req.body.ageLimit;

  const newEvent = new Event({
    createdBy,
    title,
    datetime,
    address,
    phone,
    shortDescription,
    description,
    cost,
    tags,
    ageLimit
  });
  newEvent.save()
    .then(() => res.json('Event added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((res, req) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((res, req) => {
  Event.findById(req.params.id)
    .then(event => {
      event.createdBy = req.body.createdBy;
      event.title = req.body.title;
      event.datetime = Date.parse(req.body.datetime);
      event.address = req.body.address;
      event.phone = req.body.phone;
      event.shortDescription = req.body.shortDescription;
      event.description = req.body.description;
      event.cost = req.body.cost;
      event.tags = req.body.tags;
      event.ageLimit = req.body.ageLimit;

      event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;