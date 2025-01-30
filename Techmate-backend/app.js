require("dotenv").config();
require("./Models/db");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = process.env.PORT;
const cors = require("cors");
const Authrouter = require("./Routes/Authrouter.js");
const Paymentrouter = require("./Routes/Paymentrouter.js");
const Contactrouter = require("./Routes/Contactrouter.js");

const corsOptions = {
    origin: "https://techmate-frontend.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", Authrouter);
app.use("/payment", Paymentrouter);
app.use("/contact", Contactrouter);

app.get("/", (req, res) => {
    res.send("Welcome to Backend of Techmate");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
