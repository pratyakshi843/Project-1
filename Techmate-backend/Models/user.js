let mongoose = require("mongoose");
const { Schema } = mongoose;

const Userschema = new Schema({
    name: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

const Usermodel = new mongoose.model('users' , Userschema);

module.exports = Usermodel;

