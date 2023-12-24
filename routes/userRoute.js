const express = require('express');
const { signupController, loginController } = require('../controller/userController');
const userRouter = express();

userRouter.post('/signup', signupController);
userRouter.get('/login', loginController);


module.exports = userRouter;