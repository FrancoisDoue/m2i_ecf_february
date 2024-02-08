export default {

    getAllProject: (req, res) => {
        res.json({message: "get all projects", urId: req.userId})
    },

    addProject: (req, res) => {
        res.json({message: "add a project", urId: req.userId})
    },

    getProject : (req, res) => {
        res.json({
            message: "get a project with details", 
            urId: req.userId, 
            projectId: +req.params.projectId
        })
    },

    updateProject : (req, res) => {
        res.json({
            message: "modify a project", 
            urId: req.userId, 
            projectId: +req.params.projectId
        })
    },

    deleteProject : (req, res) => {
        res.json({
            message: "delete a project", 
            urId: req.userId, 
            projectId: +req.params.projectId
        })
    },

    addTask : (req, res) => {
        res.json({
            message: "add a task", 
            urId: req.userId, 
            projectId: +req.params.projectId
        })
    },

    updateTask : (req, res) => {
        res.json({
            message: "modify a task", 
            urId: req.userId, 
            projectId: +req.params.projectId,
            taskId: +req.params.taskId
        })
    },

    deleteTask : (req, res) => {
        res.json({
            message: "delete a task", 
            urId: req.userId, 
            projectId: +req.params.projectId,
            taskId: +req.params.taskId
        })
    }

}