import { Router } from 'express';
import { readAll, readOne,create,update,del } from '../controllers/controllers.js';
import { validateCreateTodo, validateDeleteTodo, validatePatchTodo, validateReadOne} from '../middlewares/todoMiddleware.js';
const router = Router()


router.get('/todos', readAll)
router.get('/todos/:id', validateReadOne, readOne)
router.post('/todos', validateCreateTodo, create)
router.patch('/todos/:id',validatePatchTodo,  update)
router.patch('/todos',(req, res) =>{
    res.status(400).json({mensagem: "Favor preencher o ID na URL"})
})
router.delete('/todos/:id', validateDeleteTodo, del)
router.delete('/todos',(req, res) =>{
    res.status(400).json({mensagem: "Favor preencher o ID na URL"})
})
export default router