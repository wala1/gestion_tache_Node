const {schemaTask , Task} = require('../models/tache');
async function getTasks(req , res , next){
    const tasks = await Task.find();
    res.send(tasks);

};
async function addTask(req , res ,next ){
    let task = new Task ({
         Name : req.body.Name , 
         Matricule : req.body.Matricule,
         Score : req.body.Score,
         Status : req.body.Status ,
         Email_User : req.body.Email_User
    })
    task = await task.save();
    res.send(task);
};
async function updateTask(req , res , next){
    const task = await Task.findByIdAndUpdate(req.params.id , {
        Name : req.body.Name , 
        Matricule : req.body.Matricule,
        Score : req.body.Score,
        Status : req.body.Status ,
        Email_User : req.body.Email_User
    } , { new : true});
    if(!task){
        return res.status(404).send('the task with the given id was not found');
    }
    res.send(task);
}
async function deleteTask(req , res , next){
    const task = await Task.findByIdAndRemove(req.params.id);
    if(!task){
        return res.status(404).send('the task with the given id was not found');
    }
    res.send(task);

}
async function getTaskById(req , res , next ){
    const task = await Task.findById(req.params.id);
    if(!task){
        return res.status(404).send('the task with the given id was not found');
    }
    res.send(task);
}
exports.addTask= addTask;
exports.getTasks = getTasks;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
exports.getTaskById = getTaskById;
