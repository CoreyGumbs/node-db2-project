const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();


router.get('/cars', (req, res) => {
    db('cars')
    .then(car => {
        res.status(200).json(car);
    })
    .catch(error => {
        res.status(500).json({error: "There was a problem getting data."});
    });
});

router.get('/cars/:id', (req, res) =>{
    db('cars')
    .where({id: req.params.id})
    .first()
    .then(car => {
        res.status(200).json(car);
    })
    .catch(error => {
        res.status(500).json({error: "There was a problem getting car data"});
    });
});


router.post('/cars', (req, res) => {
    db('cars')
    .insert(req.body, 'id')
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(error => {
        res.status(500).json({error: "There was a problem adding the car."});
    })
});

router.put('/cars/:id', (req, res) => {
    db('cars')
    .where({id: req.params.id})
    .update(req.body)
    .then(car => {
        res.status(200).json(car);
    })
    .catch(error => {
        res.status(500).json({error: "There wasa problem updating entry"});
    })

})

module.exports =  router;