import express, { json } from "express";
import router from "./src/routes/routes.js";

const app = express()

app.use(json())
app.use(router)


app.listen(8000, ()=>{
    console.log('servidor iniciado')
})