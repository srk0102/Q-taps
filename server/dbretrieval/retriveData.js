//Importing npm modules
const Question = require('../modelSchema/questions')



// const postUserDataToTable = async (data,request,response) => {
//     var url = "mongodb+srv://siva:siva@cluster0.cabsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//     await MongoClient.connect(url, async function(err,data){
//         if(err){
//             response
//                     .status(500)
//                     .send(err.message);
//         }else{
//             var db = data.db("myFirstDatabase");
            
//         }
//     })

// }

const getUserDataFromTable = async (id,request,response) => {
    
}

const postQuestionToDb = async(data,request,response) => {
    const question = new Question(data)
    try{
        await question.save()
        response
                .status(201)
                .send("Data updated successfully")
    }
    catch(err){
        console.log(err)
        response
                .status(400)
                .send(err)
    }
}

module.exports = {
    getUserDataFromTable,
    postQuestionToDb,
    // postUserDataToTable,
}