const mongoose = require("mongoose")
const dbconnect = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`database connection successfull ${conn.connection.name}`)
    } catch (error) {
        console.log(`database connection failed ${error.message}`)
    }
}
module.exports = dbconnect