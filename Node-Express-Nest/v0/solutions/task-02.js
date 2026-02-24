// Express.js app with POST /todos endpoint
const express = require('express');
const app = express();
const PORT = 3000;
// TODO: implement todos storage and POST /todos logic

module.exports = app;
const todos = [];
app.use(express.json());

app.post('/todos', (req, res) => {
    try {
        const data = req.body;
        const todo = { id: todos.length, title: data.title, completed: false };
        todos.push(todo);
        res.json(todo);
    } catch (err) {
        console.log(err.message);
    }
});
app.listen(PORT, () => console.log(`listening on port ${PORT}`));