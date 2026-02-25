import { Sequelize } from "sequelize";
import db from "./models/index.js";
import { devNull } from "node:os";
// const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/todo_app') // Example for postgres
const { Todo, User, sequelize } = db
async function authenticate() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

    } catch (err) {
        console.log(err);
    }

}
await authenticate();
const todos = await Todo.findAll();
console.log(todos);

const todo_update = await Todo.findByPk(30);
console.log(`not updated todo: ${todo_update.status}`);
todo_update.status = todo_update.status === 'completed' ? 'active' : 'completed';
await todo_update.save();
todo_update.reload();
console.log(`updated todo: ${todo_update.status}`);

await Todo.destroy({ where: { id: 30 } })


