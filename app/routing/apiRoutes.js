const express = require('express');
const bodyParser = require('body-parser');
const friends = require('../data/friends.js');

module.exports = function(app){
    
    const router = express.Router();
    
    console.log('Loading API routes....');
    
    router.get('/api', function(req, res){
        let apiUsage = 
        { 
            apiUsage: "Usage Information",
            usage1: "/api/friends GET",
            usage2: "/api/friends POST params: name, imageurl, questions[]"
        }

        res.send(apiUsage);
    });

    router.get('/api/friends', function(req, res){
        res.send(friends.getFriends());
    });

    router.post('/api/friends', function(req, res){

        console.log("received post request for /api/friends");
        if (!req.body) return res.sendStatus(400);
        
        console.log("Handling call to /api/friends...");

        let newFriend = getFriend(req.body);
        friends.add(newFriend);
        res.send(friends.getBestMatch(newFriend));
    });

    function getFriend(body){
        return {
            name: body.name,
            imageurl: body.imageurl,
            questions: body['questions[]'] //I don't understand why this is so...property comes in with that name instead of 'questions'
        }
    }

    app.use('/', router);
}