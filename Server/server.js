const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) =>{
    res.status(200).send({message: "All good"});
})

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
})