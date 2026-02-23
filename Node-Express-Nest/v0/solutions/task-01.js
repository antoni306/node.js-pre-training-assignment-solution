// Express.js app with GET /todos endpoint
const express = require('express');
const app = express();
const PORT = 3000;
// TODO: implement todos storage and GET /todos logic

module.exports = app;

const todos = [
    { id: 1, title: 'title 1', completed: false },
    { id: 2, title: 'title 2', completed: true },
    { id: 3, title: 'title 3', completed: false },
    { id: 4, title: 'title 4', completed: true },
];

app.get('/todos', (req, res) => { res.json(todos) });
app.listen(PORT, () => console.log(`listening on port ${PORT}`));