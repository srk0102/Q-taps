//Importing npm modules
const express = require("express");

//router handles express endpoints
const router = new express.Router();
const userModel = require("../modelSchema/user")
const {getUserDataFromTable, postQuestionToDb} = require("../dbretrieval/retriveData")
const {createUser,userLogin} = require("../dbretrieval/userData")



// router.post("/users", async (req, res) => {
//     var data = req.body

//     postUserDataToTable(data,req,res);
// })

router.post("/add/user", async(req,res) => {
    var data = req.body;
    createUser(data, req, res);
})


router.post("/login", async(req,res) => {
    var data = req.body;
    userLogin(data, req, res);
})

/**
 * Implementation of the route /:users/:id?
 * @param {string} Id // requesting users data from users table
 * returns 200 if data generated sucessfully
 * returns 500 if there is an error in connecting to db
 * returns 406 if data cannot be retrived
 */
router.get("/users/:id?", async (req, res) => {
    var id = req.params.id;
    // const users = await userModel.find({})
    getUserDataFromTable(id,req,res);
    
});


module.exports = router;
