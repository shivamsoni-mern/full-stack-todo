const express = require("express")
const dbconnect = require("./config/dbconfig")
const errorhandler = require("./middleware/errorhanlder")
const app = express()
require("dotenv").config()
const port = process.env.PORT

// 
dbconnect()

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended : true}))


app.get("/", (req,res)=>{
    res.send("Welcome to todo app")
})

app.use("/api/todo", require("./routes/todoroute") )

// error handler
app.use(errorhandler)
//  starting the server
app.listen(port, ()=>{
    console.log(`Server is running on the port : ${port}`)
})
