const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

mongoose
    .connect("mongodb+srv://karan:cWs9YeTdEqhJGWU@cluster0.nnsci.mongodb.net/shop?retryWrites=true&w=majority")
    .then(() => console.log("Connected Successfully!"))
    .catch((err) => {
        console.log(err)
    });

app.listen(5000, () => {
    console.log("Backend server is running!")
})