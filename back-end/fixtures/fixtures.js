import db from "../config/db.js";
import { hashSync } from "bcrypt";

const adminAccount = {login: "admin", password: hashSync("admin", 10)};

const userAccount = {login: "user", password: hashSync("user", 10)};


const runFixtures = () => {

    const admininfo = db.User.create(adminAccount)
    const userinfo = db.User.create(userAccount)

    for(let i = 0; i < 10; i++){
        
    }
}


db.sequelize
    .authenticate()
    .then(runFixtures)
    .catch((err) => console.error(err))
        



