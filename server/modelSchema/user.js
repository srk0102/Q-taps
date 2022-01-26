const mongoose = require("mongoose");
// const validator = require("validator");

const userSchema = new mongoose.Schema(
    {
      first_name: {
        type: String,
        require: true,
        trim: true,
      },
      last_name: {
        type: String,
        require: true,
        trim: true,
      },
      user_id: {
        type: String,
        require: true
      },
      phone_no: {
        type: String,
        require: true
      },
      age: {
        type: Number,
      },
      address: {
        type: String,
      },
      email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
        // validator(value) {
        //   if (!validator.isEmail(value)) {
        //     throw new Error("Invalid email address");
        //   }
        // },
      },
      password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        // validator(value) {
        //   if (value.toLowerCase().includes("password")) {
        //     throw new Error('Password cannot contain "password"');
        //   }
        // },
      },
      picture: {
        type: String,
        default: "",
      },
      my_questions: {
        type: Array,
      },
      //Boolean to check if user subscription is active
      followers: {
        type: Array,
      },
      //User next payment date after First payment
      following: {
        type: Array,
      },
      preferences:{
          type:Array
      }
      
    },
    {
      timestamps: true,
    }
  );

  
const User = mongoose.model("User", userSchema);

module.exports = User;