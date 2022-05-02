const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/mongo.js")
const app = express()



app.use(cors())
app.use(express.json())
app.use(express.static("storage"))
const mySecret = process.env['PORT'] || 3000

/**
  * Here call the routes
 */ 

app.use("/api", require("./routes"))


app.listen(mySecret, () =>{
  console.log( `"Hllo worls" ${mySecret}`)
})

dbConnect()