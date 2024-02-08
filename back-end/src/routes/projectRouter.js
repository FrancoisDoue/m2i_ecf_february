import { Router } from "express";
import projectController from "../controllers/projectController.js";

const projectRouter = Router()

projectRouter
    .get('/', projectController.getAllProject)
    .post('/', projectController.addProject)

    .get('/:projectId', projectController.getProject)
    .put('/:projectId', projectController.updateProject)
    .delete('/:projectId', projectController.deleteProject)

    .post('/:projectId', projectController.addTask)
    .put('/:projectId/:taskId', projectController.updateTask)
    .delete('/:projectId/:taskId', projectController.deleteTask)

export default projectRouter