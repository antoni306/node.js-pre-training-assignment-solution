// Express.js app with GET /todos/:id endpoint
const express = require('express');
const app = express();

// TODO: implement todos storage and GET /todos/:id logic

module.exports = app;

const todos = [
    { id: 1, title: 'title 1', completed: false },
    { id: 2, title: 'title 2', completed: true },
    { id: 3, title: 'title 3', completed: false },
    { id: 4, title: 'title 4', completed: true },
];
const PORT = 3000;


app.get('/todos/:id', (req, res) => {
    const id = +req.params.id
    res.json(todos.find(todo => todo.id === id));
});


app.listen(PORT, () => console.log(`listening on port ${PORT}`));