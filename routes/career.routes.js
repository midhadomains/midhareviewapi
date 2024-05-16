const express=require("express")
const {CareerModel}=require("../model/career.model");


const careerRouter= express.Router()

careerRouter.post("/add", async (req, res) => {
    const payload = req.body;

    try {
        const career = new CareerModel(payload);
        await career.save();
        res.status(200).send({ "msg": "Career document  has been added successfully!!" })
    } catch (error) {
        res.status(400).json({ error: error });
    }
})

careerRouter.get("/",async (req,res)=>{
    try {
        const searchQuery = req.query
        let career;

        if(searchQuery){
             career = await CareerModel.find(searchQuery);
        }else{
             career=await CareerModel.find({});
        }
        
        res.status(200).json(career)
    } catch (error) {
        res.status(400).json({"err":error})
    }
})

careerRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params;
    const payload = req.body;


    try {
        const career = await CareerModel.findOne({ "_id": id });
        
        if (career) {
            await CareerModel.findByIdAndUpdate({ "_id": id }, payload);
            res.status(200).send({ "msg": "Career document has been updated successfully!!" })
        }else{
            res.status(200).json({"msg":"Career document is not available in Database"})
        }
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})

careerRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const career = await CareerModel.findOne({ "_id": id });
        if (career) {
            await CareerModel.findByIdAndDelete({ "_id": id });
            res.status(200).send({ "msg": "Career document has been deleted successfully!!" })
        }
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})

module.exports = { careerRouter };