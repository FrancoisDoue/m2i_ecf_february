import { Router } from "express";
import userController from "../controllers/userController.js";
import { comparePassword, hashPassword, tokenEncode } from "../../middlewares/auth.js";

const userRouter = Router()

userRouter.post('/register', [hashPassword],userController.register)
userRouter.post('/login', [comparePassword, tokenEncode], userController.login)

export default userRouter