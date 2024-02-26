const express=require("express")
const {ReviewsModel}=require("../model/reviews.model");


const reviewRouter= express.Router()

reviewRouter.post("/add", async (req, res) => {
    const payload = req.body;

    try {
        const review = new ReviewsModel(payload);
        await review.save();
        res.status(200).send({ "msg":"Review has been added successfully!!" })
    } catch (error) {
        res.status(400).json({ error: error });
    }

})

reviewRouter.get("/",async (req,res)=>{
    try {
        const searchQuery = req.query;
        let reviews;

        if(searchQuery){
            reviews = await ReviewsModel.find(searchQuery);
        }else{
            reviews=await ReviewsModel.find({})
        }
        
        res.status(200).json(reviews)
    } catch (error) {
        res.status(400).json({"err":error})
    }
})

reviewRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params;
    const payload = req.body;


    try {
        const review = await ReviewsModel.findOne({ "_id": id });
        
        if (review) {
            await ReviewsModel.findByIdAndUpdate({ "_id": id }, payload);
            res.status(200).send({ "msg": "Review has been updated successfully!!" })
        }else{
            res.status(200).json({"msg":"Review is not available in Database"})
        }
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})

reviewRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const review = await ReviewsModel.findOne({ "_id": id });
        if (review) {
            await ReviewsModel.findByIdAndDelete({ "_id": id });
            res.status(200).send({ "msg": "Review has been deleted successfully!!" })
        }
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})

module.exports = { reviewRouter };