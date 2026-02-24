// Express.js error handler middleware for ToDo API
// TODO: implement
// module.exports = {};
import express from "express"

const app = express();
const PORT = 3000;


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ error: err.message });
})
app.get('/', (req, res) => { throw new Error("Something went wrong") });
app.listen(PORT, () => console.log(`listening on port ${PORT}`));