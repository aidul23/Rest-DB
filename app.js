const express = require("express");
const cors = require("cors");
require("./config/db");

const userRouter = require("./routes/user.route");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api/users", userRouter);

//home route
app.get("/", (req,res) => {
    res.sendFile(__dirname+"/views/index.html");
});

//route not found
app.use((req, res, next) => {
    res.status(404).json({
        message: "not found!"
    });
});

//server error
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err,
        message: "server side error!"
    });
});

module.exports = app;