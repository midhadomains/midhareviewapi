const express=require("express");
const cors = require("cors");
const { connection } = require("./db");
const { courseRouter} = require("./routes/courses.routes")
const { reviewRouter} = require("./routes/reviews.routes")
require("dotenv").config();

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).json({ "msg": "Home Page" })
})

app.use("/courses", courseRouter);
app.use("/reviews", reviewRouter);

app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("DB is connected")
        console.log(`server is running at port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})