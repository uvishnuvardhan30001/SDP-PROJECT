const express = require("express")
const mongoogse = require("mongoose")
const cors = require("cors")

const dburl = "mongodb://localhost:27017/musicapi32"
mongoogse.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});

const app = express()
app.use(express.json()) // to parse JSON data
app.use(cors())







const port = 2032

app.listen(port , () => {
    console.log(`Server is running at port ${port}`)
})