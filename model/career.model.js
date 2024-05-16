const mongoose = require("mongoose");


const careerSchema = mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    experience: [{ type: Number }],
    package: {
        min: { type: Number, required: true },
        max: { type: Number, required: true }
    },
    location: { type: String, required: true },
    type: { type: String },
    role: { type: String },
    qualification: { type: String },
    openings: { type: Number },
    category: { type: String },
    employment_type: { type: String },
    key_skills: [{ type: String }],
    contact_email: { type: String, required: true },
    contact_number: { type: Number },
    contact_person: { type: String },
    closing_date: { type: String }
},{
    versionKey: false
})

const CareerModel = mongoose.model("career", careerSchema);

module.exports = { CareerModel }