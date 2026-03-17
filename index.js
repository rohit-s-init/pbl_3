const express = require("express");
const {makeCall} = require("./services/makecall.js")
const app = express();



app.get("/call", (req, res) => {
    makeCall();
})





app.listen(8080, () => {
    console.log("")
})