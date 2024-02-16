import jwt from 'jsonwebtoken'
import { hash, compare } from "bcrypt";
import db from '../config/db.js';

export const hashPassword = async (req, res, next) =>{
    if (req.body?.password) {
        hash(req.body.password, 10, (error, hashedPsw) => {
            if (error) return res.status(500).json({ 'error': "Something went wrong with hash", error })
            req.body.password = hashedPsw
            return next()
        })
    }
} 

export const comparePassword = async (req, res, next) => {
    let isAuth
    const findedUser = await db.User.findOne({where: {login: req.body?.login}}) 
    if (findedUser?.password){
        req.auth = findedUser;
        isAuth = await compare(req.body?.password, findedUser.password)
    }
    return isAuth ? next() : res.status(401).json({message: "Login or password invalid"})
}

export const tokenEncode = (req, _res, next) => {
    req.auth = jwt.sign(
        { id: req.auth.id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )
    return next()
}

export const tokenVerify = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        req.userId = jwt.verify(token, process.env.JWT_SECRET).id
        return next()
    } catch (e) {
        console.log(e)
        res.status(401).json({ message: "You must be connected to access this route" });
    }
}