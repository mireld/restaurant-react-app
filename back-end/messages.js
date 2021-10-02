const express = require('express');
const router = express.Router();
const db = require('./db');
const { v4: uuidv4 } = require('uuid');

router.get('/', async (req, res) => {
    const snapshot = await db.collection('reservations').get();
    const data = [];

    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        data.push(doc.data());
});
    res.send({
        data: data
    })
})

router.post('/', async (req, res) => {
    const { name, mail, phone, people, bookingDate } = req.body;
    const id = uuidv4();
    const docRef = db.collection('reservations').doc(id);
    const date = new Date()
    const dataForm = {
        nombre: name,
        email: mail,
        tel: phone,
        personas: people,
        Reserva: new Date(bookingDate),
        id,
        date
    }

    await docRef.set(dataForm);

    res.status(201);
    res.send({
        ...dataForm,
        id
    });
})

module.exports = router; 