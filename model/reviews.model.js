const mongoose = require("mongoose");


const reviewsSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    country: { type: String, required: true },
    job: { type: String, required: false },
    p_link: { type: String, required: true },
    l_link: { type: String, required: true },
    v_link: {type: String,required:false},
    course:{type: String,required:true},
    excerpt:{type: String,required:true}
}, {
    versionKey: false
})

const ReviewsModel = mongoose.model("reviews", reviewsSchema)

module.exports = { ReviewsModel }

