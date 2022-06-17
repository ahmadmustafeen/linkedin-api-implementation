const express = require("express");
const app = express();





app.use("/linkedin",require("./linkedin"))



app.get("/", (req, res) => {
    res.send("Route of src/api/routes working");
})





module.exports = app;