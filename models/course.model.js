const mongoose=require("mongoose");
var courseSchema=new mongoose.Schema({
    courseName:{
        type: String,
        required:"required"
    },
    courseId:{
        type: String
    },
    courseDuration:{
        type: String
    },
    courseFee :{
        type: String
    }
});
mongoose.model("course", courseSchema)