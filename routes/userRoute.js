const express = require('express');
const User = require('../model/userSchema');
const bcrypt = require('bcrypt');
const userRouter = express();

userRouter.post('/user', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        const result = await user.save();
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = userRouter;