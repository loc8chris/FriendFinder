const express = require('express');
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

apiRoutes(app);
htmlRoutes(app);

//app.listen(3000,function(){
   // console.log("FriendFinder listening on port 3000");

//});




