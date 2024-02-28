const mongoose = require("mongoose");


const coursesSchema = mongoose.Schema({
    name:{type:String, required:true},
    image: {type:String, required:true},
    price: {type:String},
    other: {type:String, required:true},
    instructor: {type:String, required:true},
    details:{type:[String],required:true},
    link: {type:String,required:true},
    rating:  {type:Number},
    tp:{type:String},
    category: {type:String,required:true},
    sub_category: {type:String},
}, {
    versionKey: false
})

const CoursesModel = mongoose.model("courses", coursesSchema);

module.exports = { CoursesModel }