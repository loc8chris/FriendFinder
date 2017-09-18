let express = require ("express");
let path = require ("path");

module.exports = function(app){
    const publicpath = path.join(__dirname + "/../public/");
    const router = express.Router();
    router.get("/", function(req , res){
     res.sendFile(path.join(publicpath + "home.html"));

    });
    
    router.get("/home", function(req , res){
        res.sendFile(path.join(publicpath + "home.html"));
        
    });

    router.get("/survey", function(req , res){
        res.sendFile(path.join(publicpath + "survey.html"));
    });

    app.use("/", router);

    app.use("*", function(req , res){
        res.sendFile(path.join(publicpath + "404.html"));
        
    });

}
