const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv-flow').config();
const secretKey = process.env.SECRET_KEY;

const User = require('../models/user');
users.use(cors());

users.post('/register', (req, res) =>
{
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    };

    User.findOne({
        email: req.body.email
    })
        .then((user) =>
        {
            if (!user)
            {
                bcrypt.hash(req.body.password, 10, (err, hash) =>
                {
                    userData.password = hash;
                    User.create(userData)
                        .then(user => res.json(user.email + ' registered!'))
                        .catch(err => res.json({error: err}));
                })
            } else
            {
                res.status(500).json({error: {message: 'User already exists!'}})
            }
        })
        .catch(err => res.json({error: err}));
});

users.post('/login', (req, res) =>
{
    User.findOne({
        email: req.body.email
    })
        .then((user) =>
        {
            if (user)
            {
                if (bcrypt.compareSync(req.body.password, user.password))
                {
                    const payload = {
                        _id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        role: user.role
                    };
                    let token = jwt.sign(payload, secretKey, {
                        expiresIn: 60 * 60 * 12
                    });
                    res.json({token: token})
                } else
                {
                    res.status(500).json({error: {message: 'Incorrect password!'}})
                }
            } else
            {
                res.status(500).json({error: {message: 'User does not exist!'}})
            }
        })
        .catch(err => res.json({message: err}))
});

users.get('/profile', (req, res) =>
{
    jwt.verify(req.headers['authorization'], secretKey, (err, decoded) =>
    {
        if (err)
        {
            res.status(500).json({error: err})
        } else
        {
            User.findOne({
                _id: decoded._id
            })
                .then(user =>
                {
                    if (user)
                    {
                        res.json(user)
                    } else
                    {
                        res.status(500).json({error: {message: 'User does not exist!'}})
                    }
                })
                .catch(err => res.json({error: err}))
        }
    });
});

users.post('/update', (req, res) =>
{
    User.findById(req.body._id)
        .then(user =>
        {
            if (req.body.first_name) user.first_name = req.body.first_name;
            if (req.body.last_name) user.last_name = req.body.last_name;
            if (req.body.liked_events) user.liked_events = req.body.liked_events;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.json({error: err}))
        })
        .catch(err => res.json({error: err}))
});

module.exports = users;