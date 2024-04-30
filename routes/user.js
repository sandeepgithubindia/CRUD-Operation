const express = require('express');
const userController=require('../controller/users')

const router = express.Router();
router
    .get('/',userController.getAllUsers)
    .get('/:id',userController.getUser)
    .post('/',userController.postUser)
    .put('/:id',userController.putUser)
    .patch('/:id',userController.patchUser)
    .delete('/:id',userController.deleteUser);
exports.router=router;