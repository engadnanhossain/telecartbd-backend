const User = require("../model/userSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// post user controller 
const signupController = async (req, res) => {
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
}



// get user controller 

const loginController = async (req, res) => {
    try {
        const user = await User.find({ email: req.body.email })

        const isValidPassword = await bcrypt.compare(req.body.password, user[0].password)

        if (isValidPassword) {
            let token = jwt.sign({
                name: user[0].name,
                email: user[0].email
            }, 'ajflkjsfsdaf6sdsaf+e8w7f87+4a+4+w+f7+A4+SD4F+SA+4E9F7', { expiresIn: '1h' });

            res.status(200).json({
                "access_token": token,
                "message": "Login Successfull"
            })
        } else {
            res.status(401).json({
                message: "Authentication failed"
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    signupController,
    loginController
}