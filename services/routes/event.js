const express = require('express');
const events = express.Router();

let Event = require('../models/event');
let User = require('../models/user');
const upload_path = process.env.UPLOAD_PATH;

events.route('/').get((req, res) =>
{
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.json({message: err}));
});

events.route('/add').post((req, res) =>
{
    let data = {};
    if (req.body.created_by) data.created_by = req.body.created_by;
    if (req.body.title) data.title = req.body.title;
    if (req.body.datetime) data.datetime = req.body.datetime;
    if (req.body.address) data.address = req.body.address;
    if (req.body.phone) data.phone = req.body.phone;
    if (req.body.short_description) data.short_description = req.body.short_description;
    if (req.body.description) data.description = req.body.description;
    if (req.body.cost) data.cost = req.body.cost;
    if (req.body.tags) data.tags = req.body.tags;
    if (req.body.age_limit) data.age_limit = req.body.age_limit;
    if (req.files)
    {
        const image = req.files.image;
        const imageName = Date.now() + '_' + image.name;
        image.mv('./../public' + upload_path + imageName);
        data.image_path = upload_path + imageName;
    }

    const newEvent = new Event(data);
    newEvent.save()
        .then(event =>
        {
            res.json('Event added!');
            User.findById(data.created_by)
                .then(user =>
                {
                    let userEvents = (user.created_events) ? user.created_events : [];
                    userEvents.push(event._id);
                    user.created_events = userEvents;
                    user.save()
                        .then()
                        .catch();
                })
                .catch();
        })
        .catch(err => res.json({error: err}));
});

events.route('/update/:id').post((req, res) =>
{
    Event.findById(req.params.id)
        .then(event =>
        {
            if (req.body.created_by) event.created_by = req.body.created_by;
            if (req.body.title) event.title = req.body.title;
            if (req.body.datetime) event.datetime = req.body.datetime;
            if (req.body.address) event.address = req.body.address;
            if (req.body.phone) event.phone = req.body.phone;
            if (req.body.short_description) event.short_description = req.body.short_description;
            if (req.body.description) event.description = req.body.description;
            if (req.body.cost) event.cost = req.body.cost;
            if (req.body.tags) event.tags = req.body.tags;
            if (req.body.age_limit) event.age_limit = req.body.age_limit;
            if (req.files)
            {
                const image = req.files.image;
                const imageName = Date.now() + '_' + image.name;
                image.mv('./../public' + upload_path + imageName);
                event.image_path = upload_path + imageName;
            }

            event.save()
                .then(() => res.json('Event updated!'))
                .catch(err => res.json({error: err}))
        })
        .catch(err => res.json({error: err}))
});

events.route('/multipleByIds').get((req, res) =>
{
    Event.find({
        '_id': req.query.ids
    })
        .then(events => res.json(events))
        .catch(err => res.json({error: err}));
});

events.route('/:id').get((req, res) =>
{
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.json({error: err}));
});

module.exports = events;