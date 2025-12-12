import todoRepository from "../repository/todoRepository.js"

async function createTodo(task,completed) {
    const isCompleted = completed ?? false
    const dataCriacao = new Date()
    try{
        await todoRepository.createTodo(task, completed,dataCriacao)
        return {message: "ToDo create is successful"}
    }catch(erro){
        console.log(erro)
        throw erro
    }
}

async function getAllTodos() {
    try{
        const todos = await todoRepository.readTodos()
        return todos
    }catch(erro){
        console.log(erro)
        throw erro
    }

        
}

async function getTodoById(id) {
    try{
        const dados = await todoRepository.readTodosId(id)
        if(dados.length > 0){
            return dados[0]
        }else{
            return null
        }
    }catch(erro){  
        console.log(erro)
        throw erro
    }
}
async function updateTodo(task, id,completed) {
    try{
        const result = await todoRepository.patchTodo(task, id,completed)
        return result.rowCount
    }catch(erro){
        console.log(erro)
        throw erro
    }
}

async function deleteTodo(id) {
    try {
        const result = await todoRepository.deleteTodo(id)
        return result
    } catch(erro){
        console.log(erro)
        throw erro
    }
}

export default {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
}