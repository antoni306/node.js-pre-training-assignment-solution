// Express.js static files serving for ToDo frontend
// TODO: implement
// module.exports = {}; 
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () =>
    console.log(`listening on ${PORT}`)
);