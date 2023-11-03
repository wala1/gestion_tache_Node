const mongoose = require('mongoose');

const schemaTask = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Matricule : {
        type : String,
        required : true
    },
    Score :{
        type : Number, 

    },
    Status : {
        type : Boolean

    },
    Email_User : {
        type : String,
        required : true

    }
})
const Task = mongoose.model('Task' , schemaTask);

exports.Task = Task;
exports.schemaTask = schemaTask;

