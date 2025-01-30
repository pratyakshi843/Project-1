const mongoose = require("mongoose");

let paymentSchema = new mongoose.Schema({
    razorpay_order_id : {
        type: String,
        required: true
    }, 
    razorpay_payment_id: {
        type: String,
        required: true
    }, 
    razorpay_signature: {
        type: String,
        required: true
    }
});

let paymentModel = mongoose.model("payment" , paymentSchema);

module.exports = paymentModel;