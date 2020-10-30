let connection= require("./models");
let express= require("express");
let app=express();
let path=require("path");
let expressHandlerbars=require("express-handlebars");
let bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({
    extended: true
}));
app.set('views',path.join(__dirname,"/views/"));

app.engine("hbs",expressHandlerbars({
    extname:"hbs",
    defaultLayout: "mainlayout",
    layoutsDir:__dirname + "/views/layouts"
}));

app.set("view engine","hbs");
app.get("/",(req,res)=>{
    //res.send("<h1> HELLO WORLD </h1>");//
    res.render("index",{});
})
app.listen("3000",()=>{
    console.log("server started");
});
