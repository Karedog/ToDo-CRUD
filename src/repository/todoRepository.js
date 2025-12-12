import { db } from "../database/conecao.js";
async function readTodos(){
    try{
        const dados = await db.query('SELECT * FROM todo')// pega a conexão de devolve sozinha
        return dados.rows
    }catch(erro){
        console.log("Erro no repository readTodos:",erro)
        throw erro
    }
}
async function createTodo(task, completed, datadecriacao){
    try{
        await db.query("INSERT INTO todo (task, completed, data) VALUES ($1,$2,$3)",[task,completed,datadecriacao])   
    }catch(erro){
        console.log("Erro no repository createTodo:",erro)
        throw erro
    }
}
async function deleteTodo(id) {
    try{
        const result =  await db.query("DELETE FROM todo WHERE id = $1",[id])
        return result.rowCount
    }catch(erro){
        console.log("Erro no repository deleteTodo:",erro)
        throw erro
    }
    
}
async function readTodosId(id) {
    try{
        const dados = await db.query("SELECT * FROM todo WHERE id = $1",[id])
        return dados.rows
    }catch(erro){
        console.log("Erro no repository readTodosId:",erro)
        throw erro
    }
}
async function patchTodo(task, id, completed) {
    const dados = []
    const campos = []
    let controle = 1

    if(task){
        dados.push(task)
        campos.push("task = $" + controle)
        controle++
    }

     if(completed != undefined){
        dados.push(completed)
        campos.push("completed = $" + controle)
        controle++
    }
    dados.push(id)
    if(campos.length === 0){
        return {rowCount: 0}
    }
    try{
        const result = await db.query("UPDATE todo SET " + campos.join() + " WHERE id = $"+controle, dados)
        return result
    }catch(erro){
        console.log("Erro no repository patchTodo:",erro)
        throw erro
    }
}
export default {readTodos, createTodo, deleteTodo, readTodosId, patchTodo}