import services from "../services/services.js"


async function create(req,res){
    const task = req.body.task
    const completed = req.body.completed
    try{
        const dados = await services.createTodo(task,completed)
        res.status(201).json(dados)
    }catch(erro){
        console.log(erro)
        res.status(500).json({mensagem:"Erro interno do servidor"})
    }
}

async function readAll(req,res){
    try{
        const dados = await services.getAllTodos()
        res.status(200).json(dados)
    } catch(erro){
        console.log(erro)
        res.status(500).json({mensagem:"Erro interno do servidor"})
    }
}
async function readOne(req, res){
    const id = req.params.id
    try{
        const dados = await services.getTodoById(id)
        if(dados == null){
            res.status(404).json({mensagem:"ID não econtrada"})
            return
        }
            res.status(200).json(dados)
        
    }catch(erro){
        console.log(erro)
        res.status(500).json({mensagem:"Erro interno do servidor"})
    }
}

async function update(req, res){
    const id = req.params.id
    const task = req.body.task
    const completed = req.body.completed

    if(!task && completed == undefined){
        res.status(400).json({mensagem:"Favor preencher a task ou completed"})
        return
    }
    try{
        const result  = await services.updateTodo(task, id,completed)
        if(result <= 0){
            res.status(404).json({mensagem:"ID não econtrada"})
            return
        }
        res.status(200).json({mensagem: "ToDo atualizadada com sucesso"})
    }catch(erro){
        console.log(erro)
        res.status(500).json({mensagem:"Erro interno do servidor"})
    }
}

async function del(req,res){
    const id  = req.params.id
    try{
        const result = await services.deleteTodo(id)
        if(result>0){
            res.status(200).json({mensagem:"ToDo deletada com sucesso"})
        }else{
            res.status(404).json({mensagem:"ID não econtrada"})
        }
    }catch(erro){
        console.log(erro)
        res.status(500).json({mensagem:"Erro interno do servidor"})
    }
}

export {create,readOne,readAll,update,del}