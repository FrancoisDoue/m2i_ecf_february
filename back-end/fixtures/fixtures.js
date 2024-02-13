import db from "../config/db.js";
import { hashSync } from "bcrypt";
import {faker} from "@faker-js/faker"

const adminAccount = {login: "admin", password: hashSync("admin", 10)};
const userAccount = {login: "user", password: hashSync("user", 10)};

const bullshit = faker.commerce
const superBullshit = faker.company

const randomIntInRange = (min, max) => Math.round(Math.random() * (max - min) + min)

const randomProjectList = () => {
    const projectList = []
    for(let i = 0; i < randomIntInRange(3, 10); i++) {
        projectList.push({
            title: `${bullshit.productAdjective()} ${bullshit.productName()}`,
            description: bullshit.productDescription()
        })
    }
    return projectList
}

const randomTaskList = () => {
    const taskList = []
    for(let i = 0; i < randomIntInRange(1, 15); i++) {
        taskList.push({
            title: superBullshit.buzzPhrase(),
            description: bullshit.productDescription(),
            priority: randomIntInRange(0, 2),
            progress: (Math.random() >= .5) ? 0 : randomIntInRange(1,2)
        })
    }
    return taskList
}

const addFixtureElements = async(parentId, list, key, Table, rec = true) => {
    list.forEach( async (element, i) => {
        element[key] = parentId
        list[i] = (await Table.create(element)).dataValues
        if(rec)
            list[i] = addFixtureElements(list[i].id, randomTaskList(), 'ProjectId', db.Task, false)
        
    })
    return list
}


const runFixtures = async () => {
    const admin = (await db.User.create(adminAccount)).dataValues
    const user = (await db.User.create(userAccount)).dataValues

    addFixtureElements(admin.id, randomProjectList(), 'UserId', db.Project)
    addFixtureElements(user.id, randomProjectList(), 'UserId', db.Project)
}

(async() => {
    await db.sequelize.sync({force: true})

    await db.sequelize
        .authenticate()
        .then(runFixtures)
        .catch((err) => console.error(err))
})()

    