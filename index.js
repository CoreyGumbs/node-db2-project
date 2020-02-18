const express = require('express');
const server = require('./api/server');
const router = require('./router/router');
const PORT = process.env.PORT || 5000;

server.use('/api/cars/', router);


server.get('/', (req, res) =>{
    res.send(`<h2>Let's Do Some Database Migrations!</h2>`)
})



server.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
});