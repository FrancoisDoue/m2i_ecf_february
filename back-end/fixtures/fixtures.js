import db from "../config/db.js";
import { hashSync } from "bcrypt";
import {faker} from "@faker-js/faker"
import env from "../config/env.js";

const adminAccount = {login: "admin", password: hashSync("admin", 10)};
const userAccount = {login: "user", password: hashSync("user", 10)};

const bullshit = faker.commerce
const superBullshit = faker.company

const randomIntInRange = (min, max) => {
    min = Math.ceil(min)
    return Math.floor(Math.random() * (max - min) + min)
}
const randomProjectList = () => {
    const projectList = []
    for(let i = 0; i < randomIntInRange(2, 6); i++) {
        projectList.push({
            title: `${bullshit.productAdjective()} ${bullshit.productName()}`,
            description: bullshit.productDescription()
        })
    }
    return projectList
}

const randomTaskList = () => {
    const taskList = []
    for(let i = 0; i < randomIntInRange(0, 15); i++) {
        taskList.push({
            title: superBullshit.buzzPhrase(),
            description: bullshit.productDescription(),
            priority: randomIntInRange(0, 2),
            process: (Math.random() >= .5) ? 0 : randomIntInRange(1,2)
        })
    }
    return taskList
}


const runFixtures = async () => {
    const admininfo = (await db.User.create(adminAccount)).dataValues
    const userinfo = (await db.User.create(userAccount)).dataValues

    console.log(admininfo);
    console.log(userinfo);

    randomProjectList().forEach((element) => {

    })
}

(async() => {
    await db.sequelize.sync({force: true})

    await db.sequelize
        .authenticate()
        .then(runFixtures)
        .catch((err) => console.error(err))
})()

    