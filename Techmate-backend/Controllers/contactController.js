const contactModel = require("../Models/contact");

let contact = async(req,res)=>{
    let {name , email, subject, message} = req.body;
    let contactData = new contactModel({
        name:name ,
        email:email ,
        subject:subject ,
        message:message ,
    });
    await contactData.save();
    return res
        .status(201)
        .json({ message: "Your response save successfully", success: true });
}

module.exports = {contact};