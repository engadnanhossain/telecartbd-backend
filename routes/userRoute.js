const express = require('express');
const User = require('../model/userSchema');
const userRouter = express();

userRouter.post('/user', async (req, res) => {
    try {
        const user = new User({
            ...req.body
        })
        const result = await user.save();
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = userRouter;