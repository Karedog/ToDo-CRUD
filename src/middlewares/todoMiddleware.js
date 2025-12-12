async function validateCreateTodo(req, res, next) {
    const task = req.body.task;
    if(!task){
        res.status(400).json({mensagem: "Favor preencher o task"})
        return
    }
    next();
}

async function validatePatchTodo(req, res, next) {
    const {task, completed} = req.body || {};

    if(!task && completed === undefined){
        res.status(400).json({mensagem: "Favor preencher a task ou completed"})
        return
    }
    next();
}

async function validateDeleteTodo(req, res, next) {
    const id = req.params.id
    if(isNaN(Number(id))){
        res.status(400).json({mensagem: "Favor preencher o ID corretamente"})
        return
    }
    next();
}
async function validateReadOne(req, res, next) {
    const id = req.params.id
    if(isNaN(Number(id))){
        res.status(400).json({mensagem: "Favor preencher o ID corretamente"})
        return
    }
    next();
}


export {validateCreateTodo, validatePatchTodo, validateDeleteTodo,validateReadOne}