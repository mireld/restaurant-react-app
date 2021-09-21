const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send({
        AppName: 'Restaurant Welcome',
        Author: 'David Mireles'
    })
})

app.listen(PORT, () => {
    console.log(`El server se esta ejecutando en el puerto: ${PORT}`)
})

