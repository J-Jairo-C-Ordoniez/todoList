// modules
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

import error from "./middlewares/error.js";
import routes from "./routes/rTask.js";

// var dirname y filename
let __filename = fileURLToPath(import.meta.url)
let __dirname =  dirname(__filename)

const app = express()

const port = process.env.PORT || 3000

// middleware
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')


app.use(routes)

app.use(error.e404)

app.listen(port, () => console.log(`http://localhost:${port}`))