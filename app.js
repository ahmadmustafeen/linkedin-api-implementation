
const express = require('express')
const app = express()
const routes = require("./src/api/routes")
const port = 3000



app.use("/api/v1",routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})