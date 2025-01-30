let mongo = require("mongoose");
const mongo_url = process.env.Mongo_url;

mongo.connect(mongo_url)
.then(() => console.log("Connected to MongoDB"))
.catch((err) =>{
    console.log(err);
});


