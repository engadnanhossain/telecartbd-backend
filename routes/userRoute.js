const express = require('express');
const { signupController, loginController } = require('../controller/userController');
const userRouter = express();

userRouter.post('/signup', signupController);
userRouter.post('/login', loginController);


module.exports = userRouter;