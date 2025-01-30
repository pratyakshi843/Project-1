const router = require('express').Router();
const { contact } = require("../Controllers/contactController.js");

router.post("/feedback", contact);


module.exports = router;