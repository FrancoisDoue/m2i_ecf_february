import db from "../../config/db.js"

export default {

    getAllProject: async(req, res) => {
        try {
            const datas = await db.Project.findAndCountAll({
                where: {UserId: req.userId}
            })
            if (datas) return res.json(datas)
            return res.status(404).json({message: 'Not Found'})
        } catch (error) {
            res.status(500).json()
        }
    },

    addProject: async(req, res) => {
        try {
            req.body.UserId = req.userId
            const datas = await db.Project.create(req.body)
            res.status(201).json(datas.dataValues)
        }catch(e){
            res.status(500).json()
        }
    },

    getProject : async (req, res) => {
        try {
            const datas = await db.Project.findOne({
                include : db.Task,
                count: db.Task,
                where: {
                    id: req.params.projectId, 
                    UserId: req.userId
                }
            })
            if (datas) return res.json(datas)
            return res.status(404).json({message: 'Not Found'})
        } catch (error) {
            res.status(500).json()
        }
    },

    updateProject : async(req, res) => {
        try{
            const datas = await db.Project.update(req.body, {
                where: {
                    id : req.params.projectId,
                    UserId: req.userId
                }
            })
            if(datas) return res.status(201).json()
            return res.status(404).json()
        }catch (e) {
            return res.status(500).json()
        }
    },

    deleteProject : async(req, res) => {
        try {
            const datas = await db.Project.destroy({
                where: {
                    id: req.params.projectId, 
                    UserId: req.userId
                }
            })
            if (datas) return res.status(204).end()
            return res.status(404).json({message: "This project does not exist"})
        } catch (error) {
            res.status(500).json()
        }
    },

    addTask : async(req, res) => {
        try{
            req.body.ProjectId = req.params.projectId
            const datas = await db.Task.create(req.body)
            return res.status(201).json(datas.dataValues)
        }catch (e) {
            return res.status(500).json()
        }
    },

    updateTask : async(req, res) => {
        try{
            const isOwner = (await db.Project.findOne({
                where: {UserId: req.userId, id: req.params.projectId}
            })).id
            const datas = await db.Task.update(req.body, {
                include: db.Project,
                where: {
                    id : req.params.taskId,
                    ProjectId: isOwner
                }
            })
            if(datas[0]) return res.status(201).json()
            return res.status(404).json()
        }catch (e) {
            return res.status(500).json(e)
        }
    },

    deleteTask : async(req, res) => {
        try {
            const isOwner = (await db.Project.findOne({
                where: {UserId: req.userId, id: req.params.projectId}
            })).id
            const datas = await db.Task.destroy({
                where: {
                    id : req.params.taskId,
                    ProjectId: isOwner
                }
            })
            if(datas) return res.status(204).json()
            return res.status(404).json()
        } catch (error) {
            return res.status(500).json()
            
        }
    }

}