const express = require("express");
const app = express();





app.get("/create_post",(req,res)=>{
    res.send("create-post")
})

app.get("/news_feed",(req,res)=>{
    res.send("news-feed")
})



app.get("/", (req, res) => {
    res.send("Route of src/api/routes/linkedin working");
})





module.exports = app;