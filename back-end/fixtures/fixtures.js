import db from "../config/db.js";
import { hashSync } from "bcrypt";
import {faker} from "@faker-js/faker"

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
    for(let i = 0; i < randomIntInRange(2, 8); i++) {
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

const addFixtureElement = async(parentId, list, key, Table) => {
    list.forEach(async (element, i) =>{
        element[key] = parentId
        list[i] = (await Table.create(element)).dataValues
        list[i] = addFixtureElement(list[i].id, randomTaskList(), 'ProjectId', db.Task)
        
    })
    return list
}


const runFixtures = async () => {
    const admin = (await db.User.create(adminAccount)).dataValues
    const user = (await db.User.create(userAccount)).dataValues

    await addFixtureElement(admin.id, randomProjectList(), 'UserId', db.Project)
    await addFixtureElement(user.id, randomProjectList(), 'UserId', db.Project)
}

// there are an issue but it's work already. I'll try to fix it later

(async() => {
    await db.sequelize.sync({force: true})

    await db.sequelize
        .authenticate()
        .then(runFixtures)
        .catch((err) => console.error(err))
})()

    