// Express.js GET /todos/search endpoint with query params
// TODO: implement
// module.exports = {};
import express from "express";

const PORT = 3000;
const app = express();

const todos = [
    { id: 1, title: 'title 1', completed: false },
    { id: 2, title: 'title 2', completed: true },
    { id: 3, title: 'title 3', completed: false },
    { id: 4, title: 'title 4', completed: true },
];
app.get('/todos/search', (req, res) => {
    const id = Number(req.query.id);
    const title = req.query.title;
    const completed = req.query.completed === 'true' ? true : false;
    if (id)
        res.json(todos.find(todo => todo.id === id));
    else if (title)
        res.json(todos.filter(todo => todo.title.search(title) !== -1))
    else if (completed !== undefined)
        res.json(todos.filter(todo => todo.completed === completed))
    else
        res.json({ message: "wrong query params" });
})
app.listen(PORT, () => console.log(`listening on port ${PORT}`))