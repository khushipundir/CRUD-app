const mongoose =require('mongoose');
mongoose.connect("mongodb://localhost:27017/edureka",{ useUnifiedTopology: true }).then(()=>
 console.log('Database Connection Successful!!'))
.catch(err => console.error(err));
const course=require("./course.model");    