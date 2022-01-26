const User = require('../modelSchema/user')

const createUser = async(data,request,response) => {
    const user = new User(data)
    try{
        await user.save()
        response
                .status(201)
                .send("user created successfully")
    }
    catch(err){
        console.log(err)
        response
                .status(400)
                .send(err)
    }
}

const userLogin = async(data,request,response) => {
    try{
        const user =await User.findOne({email: data.email})
        // console.log(user)
        response
                .status(201)
                .send(user)

    }catch(err){
        response
                    .status(400)
                    .send(err)
    }
    
  
}

module.exports = {
    createUser,userLogin
}