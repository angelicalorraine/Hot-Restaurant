
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        name: `yoda`,
        phone: `281555555`,
        email: `theforce@test.com`,
        id: `12345`
    }
]
const waiting = [
    {
        name: `grogu`,
        phone: `713555555`,
        email: `thebabyforce@test.com`,
        id: `54321`
    }
]


// res.send("Welcome to the Hot Reservation Page!")
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// tables view
app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// reserve view
app.get('/mkres', function (req, res) {
    res.sendFile(path.join(__dirname, "mkres.html"));
});

// tables route

// Displays all tables
app.get('/api/tables', (req, res) => res.json(tables));
app.get('/api/waiting', (req, res) => res.json(waiting));
// Create New Tables - takes in JSON input


app.post('/api/tables', (req, res) => {
    const newRes = req.body;

    console.log(newRes)
    tables.push(newRes);
    res.json(newRes);

})

app.post('/api/waiting', (req, res) => {
    const newWait = req.body;

    console.log(newWait)
    tables.push(newWait);
    res.json(newWait);

})
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
