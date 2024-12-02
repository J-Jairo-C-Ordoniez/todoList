import pool from "../config/db.js";

const mTask = {
    getAll: async () => {
        try {
            const [results] = await pool.query("SELECT * FROM tasks")
            return results
        } catch (err) {
            throw ({ status: 500, menssage: "Error al obtener las tareas" });
        }
    },
    create: async (task) => {
        try {
            await pool.query("INSERT INTO tasks (title) VALUES (?)", [task.title])
        } catch (err) {
            throw ({ status: 500, menssage: "Error al crear la tarea" })
        }
    },
    getOne: async (id) => {
        try {
            let [results] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id])
            return results[0]
        } catch (err) {
            throw ({ status: 500, menssage: "Error al extraer la tarea" })
        }
    },
    update: async (task) => { 
        try {
            await pool.query("UPDATE tasks SET title = ? WHERE id = ?", 
                [task.title, task.id])
        } catch (err) {
            throw ({ status: 500, menssage: "Error al editar la tarea" })
        }
    },
    complete: async (id) => {
        try {
            console.warn(id)
            await pool.query("UPDATE tasks SET completed = ? WHERE id = ?", [true, id])
        } catch (err) {
            throw ({ status: 500, menssage: "Error al completar la tarea" })
        }
    },
    uncomplete: async (id) => {
        try {
            await pool.query("UPDATE tasks SET completed = ? WHERE id = ?", [false, id])
        } catch (err) {
            throw ({ status: 500, menssage: "Error al desmarcar la tarea" })
        }
    },
    delete: async (id) => {
        try {
            console.warn(id)
            await pool.query("DELETE FROM tasks WHERE id = ?", [id])
        } catch (err) {
            throw ({ status: 500, menssage: "Error al completar la tarea" })   
        }
    }
}

export default mTask
