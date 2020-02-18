const express =  require('express');
const port = process.env.PORT || 5000;

const server = express();

server.use(express.json());


module.exports =  server;