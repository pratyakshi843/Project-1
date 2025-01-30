const jwt = require("jsonwebtoken");
const Usermodel = require("../Models/user");
const bcrypt = require("bcrypt");

let signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let jwtoken = "";
        let user = await Usermodel.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ message: "Email already exists, Please login", success: false });
        }

        // Create a new user
        const usermodel = new Usermodel({ name, email, password });
        usermodel.password = await bcrypt.hash(password, 10); // Hash the password
        await usermodel.save().then(async()=>{
            let user = await Usermodel.findOne({ email });
            jwtoken = jwt.sign(
                { email: user.email, _id: user._id },
                process.env.SECRET_KEY,
                { expiresIn: "24h" }
            );
            
        });

        return res
            .status(201)
            .json({ message: "User created successfully", success: true, token: jwtoken });
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({ message: "Internal Server error", success: false, error });
    }
};

let login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        let user = await Usermodel.findOne({ email });
        if (!user) {
            return res
                .status(403)
                .json({ message: "Email does not exist, Signup first", success: false });
        }

        // Verify password
        let userpassword = await bcrypt.compare(password, user.password);
        if (!userpassword) {
            return res
                .status(403)
                .json({ message: "Email or password is incorrect", success: false });
        }

        // Generate JWT
        const jwtoken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "24h" }
        );

        return res.status(200).json({
            message: "Login Successfully",
            success: true,
            token: jwtoken,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Internal Server error", success: false, error });
    }
};

module.exports = {
    signup,
    login,
};
