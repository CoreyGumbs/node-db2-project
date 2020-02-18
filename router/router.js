const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({message: "Data Coming Soon!"});
});


module.exports =  router;