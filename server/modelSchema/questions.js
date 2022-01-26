const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    question: {
        required: true,
      type: String,
    },
    options: {
        required: true,
        type:Array,
    },
    result: {
      type: String,
    },
    user_id: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Question = mongoose.model("Question", questionSchema);

module.exports = Question;








// brandSchema.virtual("myFbPage", {
//   ref: "FbPage",
//   localField: "_id",
//   foreignField: "owner",
// });

// brandSchema.virtual("myIgPage", {
//   ref: "IgPage",
//   localField: "_id",
//   foreignField: "owner",
// });

// brandSchema.pre("save", async function (next) {
//   console.log("this is from save");
//   next();
// });
