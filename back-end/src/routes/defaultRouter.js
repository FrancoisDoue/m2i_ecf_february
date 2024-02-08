import { Router } from "express";
import userRouter from "./userRouter.js";
import projectRouter from "./projectRouter.js";
import { tokenVerify } from "../../middlewares/auth.js";

const router = Router()

router
    .use('/user', userRouter)
    .use('/project', tokenVerify, projectRouter)

export default router