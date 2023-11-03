const {Task , schemaTask} = require("../models/tache");
const {addTask , getTasks , updateTask , deleteTask , getTaskById} = require("../controller/taskController");
const validate = require('../middelware/validate');
const express = require('express');
const router = express.Router();

router.post('/add' ,validate, addTask );
router.get('/' , getTasks);
router.put('/:id' ,validate, updateTask);
router.delete('/:id' , deleteTask);
router.get('/:id' , getTaskById);

module.exports = router ;
