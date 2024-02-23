const mongoose = require("mongoose");


const coursesSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    other: String,
    instructor: String,
    link: String,
    rating: Number,
    category:String,
    sub_category:String,
}, {
    versionKey: false
})

const CoursesModel = mongoose.model("courses", coursesSchema);

module.exports = { CoursesModel }