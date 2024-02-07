import env from "./config/env.js"
import express from "express";
import router from "./src/routes/defaultRouter.js";
import db from "./config/db.js";

const app = express();

app
    .use(express.json())
    .use(router)

db.sequelize
    .authenticate()
    .then(
        () => app.listen(env.PORT, () => console.log(`Server is listening \nhttp://localhost:${env.PORT}/`))
    )
    .catch((err) => console.error ('Connection error to db : ', err.message))