const express = require('express');
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");
const bodyParser = require("body-parser");

const app = express();

var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

apiRoutes(app);
htmlRoutes(app);

app.listen(port, function(){
   console.log("FriendFinder listening on port 3000");

});




