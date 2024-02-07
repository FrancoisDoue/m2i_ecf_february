import db from "../../config/db.js"

export default {
    register: async (req, res) => {
        console.log(req.body)
        const { login, password } = req.body;
        try{
            const newUser = await db.User.create({login: login, password: password})
            return res.status(201).json(newUser)
        } catch(e) {
            console.error(e)
            return res.status(400).json({error: e.errors})
        }
    },

    login: (req, res) => res.status(200).json({token: req?.auth})

}