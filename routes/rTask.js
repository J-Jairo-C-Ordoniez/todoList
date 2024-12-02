import { Router } from "express";
import cTask  from "../controllers/cTask.js";

const routes = Router()

routes.get('/', cTask.get)
routes.get('/add', cTask.getAddForm)
routes.post('/add', cTask.add)
routes.get('/edit/:id', cTask.getEditForm)
routes.post('/edit/:id', cTask.edit)
routes.get('/complete/:id', cTask.complete)
routes.get('/uncomplete/:id', cTask.uncomplete)
routes.get('/delete/:id', cTask.delete)

export default routes