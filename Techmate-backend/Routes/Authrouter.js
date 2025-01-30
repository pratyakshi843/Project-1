const router = require('express').Router();
const { signupValidation, loginValidation } = require("../Middlewares/Authvalidation");
const { signup, login } = require("../Controllers/Authcontroller.js");

router.post("/login", loginValidation, login);

router.post("/signup", signupValidation , signup)

module.exports = router;