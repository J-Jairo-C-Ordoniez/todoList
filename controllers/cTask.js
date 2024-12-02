import mTask from "../models/mTask.js";
import error from "../middlewares/error.js";

const cTask = {
    async get(req, res) {
        try {
            let tasks = await mTask.getAll()
            res.render('index', { title: 'To Do List', tasks})
        } catch (err) {
            error.e500(req, res, err.menssage)
        }
    },

    getAddForm(req, res) {
        res.render('addTask', { title: "Agregar Tarea" })
    },

    async add(req, res) {
        try {
            let { title } = req.body
            await mTask.create({title})
            res.redirect("/")
        } catch (err) {
            error.e500(req, res, err.menssage)
        }
    },

    async getEditForm(req, res) {
        try {
            let id = parseInt(req.params.id)
            let task = await mTask.getOne(id)
            if (!task) {
                error.e404(req, res)
            } else {
                res.render('edit', { title: "Editar Tarea", task })
            }
            res.redirect('/')
        } catch (err) {
            error.e500(req, res, err.menssage)
        }
    },

    async edit(req, res) {
        try {
            let { name } = req.body
            let id = parseInt(req.params.id)
            await mTask.update({ id, title: name })
            res.redirect("/")
        } catch (err) {
            error.e500(req, res, err.menssage)
        }
    },

    async complete(req, res) {
        try {
            let id = parseInt(req.params.id)
            await mTask.complete(id)
            res.redirect('/')
        } catch (err) {
            error.e500(req, res, err.menssage)
        }
    },

    async uncomplete(req, res) {
        try {
            let id = parseInt(req.params.id)
            await mTask.uncomplete(id)
            res.redirect('/')
        } catch (err) {
            error.e500(req, res, err.menssage)
        }
    },

    async delete(req, res) {
        try {
            let id = parseInt(req.params.id)
            await mTask.delete(id)
            res.redirect('/')
        } catch (err) {
            error.e500(req, res, err.menssage)
        }
    }
}

export default cTask