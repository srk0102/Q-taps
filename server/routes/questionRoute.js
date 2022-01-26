const express = require("express");
const {getUserDataFromTable, postQuestionToDb} = require("../dbretrieval/retriveData")


//router handles express endpoints
const router = new express.Router();


router.post("/add_question", async(req,res) => {
    var data = req.body;
    postQuestionToDb(data, req, res);
})



module.exports = router;
