const express=require("express")
const {CoursesModel}=require("../model/courses.model");


const courseRouter= express.Router()

courseRouter.post("/add", async (req, res) => {
    const payload = req.body;

    try {
        const course = new CoursesModel(payload);
        await course.save();
        res.status(200).send({ "msg": "Course has been added successfully!!" })
    } catch (error) {
        res.status(400).json({ error: error });
    }

})

courseRouter.get("/",async (req,res)=>{
    try {
        const searchQuery = req.query
        console.log(searchQuery)
        let courses;

        if(searchQuery){
            courses = await CoursesModel.find(searchQuery);
        }else{
            courses=await CoursesModel.find({})
        }
        
        res.status(200).json(courses)
    } catch (error) {
        res.status(400).json({"err":error})
    }
})

courseRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params;
    const payload = req.body;


    try {
        const course = await CoursesModel.findOne({ "_id": id });
        
        if (course) {
            await CoursesModel.findByIdAndUpdate({ "_id": id }, payload);
            res.status(200).send({ "msg": "course has been updated successfully!!" })
        }else{
            res.status(200).json({"msg":"course is not available in Database"})
        }
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})

courseRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const course = await CoursesModel.findOne({ "_id": id });
        if (course) {
            await CoursesModel.findByIdAndDelete({ "_id": id });
            res.status(200).send({ "msg": "Course has been deleted successfully!!" })
        }
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})

module.exports = { courseRouter };