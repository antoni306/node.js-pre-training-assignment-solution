// Express.js logging middleware for ToDo API
const express = require('express');
const PORT = 3000;
function loggingMiddleware(req, res, next) {
  console.log(req.method);
  console.log(req.url);
  next();
}

module.exports = loggingMiddleware;
const app = express();


app.use(loggingMiddleware);
const todos = [
  { id: 1, title: 'title 1', completed: false },
  { id: 2, title: 'title 2', completed: true },
  { id: 3, title: 'title 3', completed: false },
  { id: 4, title: 'title 4', completed: true },
];

app.get('/todos', (req, res) => { res.json(todos) });
app.listen(PORT, () => console.log(`listening on port ${PORT}`));