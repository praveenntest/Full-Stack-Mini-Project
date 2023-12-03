const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());

server.get('/demo',(req,res) => {
    res.send('hello')
})

server.listen(8080, ()=>{
    console.log('server started')
})
