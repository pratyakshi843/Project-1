const Joi = require("joi");

let signupValidation = (req,res,next)=>{
    let schema = Joi.object({
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(4).max(100).required(),
    })
    console.log(req.body);
    const { error } = schema.validate(req.body);
    if(error){
        return res.status(400).json({ message: error.details[0].message })
    }

    next();
}

let loginValidation = (req, res, next) => {
    let schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required(),
    })

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(402).json({ message: "404 bad request", error })
    }

    next();
}

let ensureAuth = async (req, res, next) => {
    try {
        const auth = req.headers["authorization"];
        if(!auth){
            return res.status(400).json({ message: "Unauthorizeduser", error });
        }
        const decoded = jwt.verify(auth, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        if (error) {
            return res.status(402).json({ message: "404 bad request", error })
        }
    }
}

module.exports = {
    signupValidation,
    loginValidation,
    ensureAuth
}