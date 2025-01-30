const paymentModel = require("../Models/payment");
const razorpay = require("razorpay");
const crypto = require("crypto");

const instance = new razorpay({
    key_id: process.env.RAZORPAY_ID_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});

let checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR"
        };

        const order = await instance.orders.create(options);
        res.status(200).json({
            success: true,
            order
        });
    } catch (error) {
        console.error("Error in checkout:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong while creating the order."
        });
    }
};

let paymentVerification = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
            .update(body.toString())
            .digest("hex");
        const isauth = expectedSignature === razorpay_signature;

        if (isauth) {
            // Use a different variable name here
            const paymentRecord = new paymentModel({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            });

            await paymentRecord.save();

            res.redirect(`https://techmate-frontend.onrender.com/paymentsuccess`);
        } else {
            res.status(400).json({ success: false, message: "Signature verification failed." });
        }
    } catch (error) {
        console.error("Error in paymentVerification:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong during payment verification.",
        });
    }
};


let sendingKey = (req, res) => {
    try {
        res.status(200).json({ key: process.env.RAZORPAY_ID_KEY });
    } catch (error) {
        console.error("Error in sendingKey:", error);
        res.status(500).json({
            success: false,
            message: "Unable to retrieve Razorpay key."
        });
    }
};

module.exports = {
    checkout,
    paymentVerification,
    sendingKey
};
