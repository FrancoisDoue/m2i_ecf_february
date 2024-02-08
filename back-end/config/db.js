import projectModel from "../src/models/projectModel.js";
import taskModel from "../src/models/taskModel.js";
import userModel from "../src/models/userModel.js";
import env from "./env.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(env.DB_DATABASE, env.DB_USER, env.DB_PSW, {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT
});

const Task = taskModel(sequelize);
const Project = projectModel(sequelize);
const User = userModel(sequelize);

User.hasMany(Project, {onDelete: 'CASCADE'});
Project.User = Project.belongsTo(User);

Project.hasMany(Task, {onDelete: 'CASCADE'});
Task.Project = Task.belongsTo(Project)

sequelize
    .sync({force: +env.SEQUELIZE_SYNC})
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.error('Synchronization error : ', err.message));

export default { sequelize, Task, Project, User }


// We save the return values of the association setup calls to use them later
// Product.User = Product.belongsTo(User);
// User.Addresses = User.hasMany(Address);