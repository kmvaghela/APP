const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://karan:karan@cluster0.nnsci.mongodb.net/shop?retryWrites=true&w=majority")
    .then(() => console.log("Connected Successfully!"))
    .catch((err) => {
        console.log(err)
    });

app.listen(5000, () => {
    console.log("Backend server is running!")
})