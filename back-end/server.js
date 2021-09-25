const express = require('express');
const app = express();
const messageRoutes = require ('./messages');
const PORT = 4000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/reservations', messageRoutes);

app.get('/', (req, res) => {
    res.send({
        AppName: 'Restaurant Welcome',
        Author: 'David Mireles'
    })
})

app.listen(PORT, () => {
    console.log(`El server se esta ejecutando en el puerto: ${PORT}`)
})

