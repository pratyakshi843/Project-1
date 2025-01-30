const router = require('express').Router();
const { checkout, paymentVerification, sendingKey } = require("../Controllers/paymentController") 

router.post("/checkout", checkout);
router.post("/paymentVerification", paymentVerification);
router.get("/api/getkey", sendingKey );

module.exports = router;