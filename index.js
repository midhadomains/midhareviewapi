require("dotenv").config();
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const mongoose = require("mongoose");
const { courseRouter } = require("./routes/courses.routes");
const { reviewRouter } = require("./routes/reviews.routes");
const { careerRouter } = require("./routes/career.routes");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {

});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("DB is connected");
});

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Home Page" });
});

app.use("/courses", courseRouter);
app.use("/reviews", reviewRouter);
app.use("/career", careerRouter);

// Export the app for local development
if (process.env.ENVIRONMENT !== "lambda") {
  app.listen(process.env.PORT, async () => {
    console.log(`Server is running at port ${process.env.PORT}`);
  });
}

// Export the app for AWS Lambda
module.exports.handler = serverless(app);
