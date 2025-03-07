const express = require("express");
const router = express.Router();

const listTask = [];

router.post('/', (req, res)=>{
    const {nom, description} = req.body;

    const task = {
        id: listTask.length,
        nom: nom,
        description: description,
    }

    listTask.push(task)
    res.status(201).json({ message: task})
}) 


router.get('/', (req, res)=> {
    res.json({
        message: listTask
    })
})

router.get('/:id/', (req, res)=>{
        const op = listTask;
        const toto = req.params.id 

        if(!listTask[toto]){
            res.json({
                message: "L'ID saisit n'a pas d'élément dans la base"
            })
        }
        const fort = op.find((element) => element.id == toto )
        // const fort = op.find((element) => element.id == req.params.id )
        res.json({message: fort})

})

router.put('/:id/', (req, res)=>{

     
    const id = parseInt(req.params.id);
    const nouvel = req.body;

    //console.log(nouvel)

    const task = listTask.find(task => task.id === id); // Trouver la tâche par ID
    if (!task) {
        return res.status(404).json({ message: `Tâche avec l'ID ${id} introuvable.` });
    }

    task.nom =nouvel.nom||task.nom
    task.description = nouvel.description||task.description

    res.status(200).json({message: 'Changement de données',id, nouvel})

})


router.delete('/:id', (req, res)=>{

    const id = parseInt(req.params.id) ;

    if(!listTask[id]){
        res.json({
            message: "L'ID saisit n'a pas d'élément dans la base"
        })
    }

    const taskid = listTask.findIndex(task => listTask.id === id);
    
    listTask.splice(taskid, 1);

    res.status(200).json({ message: `Tâche avec l'ID ${id} supprimée` });

})
module.exports = router;



