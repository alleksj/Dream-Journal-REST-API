const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose')
const dreamSchema = require('./model/dream.js')
const Dream = mongoose.model('dream', dreamSchema, 'dream')
require("dotenv/config");

const app = express();
let db;
app.use(express.json());

// Connect to the database (MongoDB Atlas)
mongodb.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    db = client.db();
    app.listen(3000);
});

app.get('/', (req, res) => {
    res.send("First request");
})

// Task 2: Returns an array of strings
app.get('/get-all-dream-types', (req, res) => {
    res.send(Dream.schema.path('type').enumValues);
});

// Task 3: Basic CRUD
// Create dream and add to the database
app.post('/create-dream', (req, res) => {
    db.collection('Dream').insertOne(new Dream({ title: req.body.title, description: req.body.description, date: Date.now(), type: req.body.type }), (err, info) => {
        res.json(info.ops[0]);
    });
});


// Read dreams from database and display
app.get('/display-dreams', (req, res) => {
    db.collection('Dream').find().toArray((err, dreams) => {
        res.send(dreams);
    });
});

// Update dream from database
app.post('/update-dream/:id', (req, res) => {
    const { id } = req.params;
    db.collection('Dream').findOneAndUpdate({ _id: new mongodb.ObjectId(id) }, { $set: { title: req.body.title, description: req.body.description, type: req.body.type } }, () => {
        res.send(`User with the id ${id} has been updated.`);
    });
});

// Delete dream from database
app.post('/delete-dream/:id', (req, res) => {
    const { id } = req.params;
    db.collection('Dream').deleteOne({ _id: new mongodb.ObjectId(id) }, () => {
        res.send(`User with the id ${id} has been deleted.`);
    });
});