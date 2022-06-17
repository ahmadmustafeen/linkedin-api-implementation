const express = require("express");
const { POST_CREATED_SUCCESS,NEWS_FEED_FETCHED_SUCCESS } = require("../../../config/constants");
const { apiResponse } = require("../../helpers");
const app = express();





app.get("/create_post",(req,res)=>{
    res.send(apiResponse({},POST_CREATED_SUCCESS))
})

app.get("/news_feed",(req,res)=>{
    res.send(apiResponse({},NEWS_FEED_FETCHED_SUCCESS))
})



app.get("/", (req, res) => {
    res.send("Route of src/api/routes/linkedin working");
})





module.exports = app;