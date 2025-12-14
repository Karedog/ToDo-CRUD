import express, { json } from "express";
import router from "./src/routes/routes.js";
import "dotenv/config"
import cors from 'cors'

const app = express()

app.use(cors())
app.use(json())
app.use(router)


app.listen(process.env.PORT, ()=>{
    console.log('servidor iniciado')
})