const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();


router.get('/cars', (req, res) => {
    db.get('cars')
    .then(car => {
        res.status(200).json(car);
    })
    .catch(error => {
        res.status(500).json({error: "There was a problem getting data."});
    });
});

router.get('/cars/:id', (req, res) =>{
    db.get('cars')
    .where({id: req.params.id})
    .first()
    .then(car => {
        res.status(200).json(car);
    })
    .catch(error => {
        res.status(500).json({error: "There was a problem getting car data"});
    });
});


module.exports =  router;