const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const functions = require('./functions');
const TwitterApi = require('./twitterApi');
const Cache = require('./cache');

class Server {
    constructor() {
        this.twitterClient = new TwitterApi();
        this.app = express();
        this.cache = new Cache();
        
        this.initExpressMiddleware();
        this.start(); 
        this.router();
    }

    initExpressMiddleware(){
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cors());
        this.app.use(this.cache.middleware);
    }
    
    router(){

        this.app.get('/', function(req, res) {
            res.json({success: true, data:"server Up!"});
        });
        this.app.post('/search', functions.search);
        this.app.get('/user', this.twitterClient.getStatuses);
        this.app.get('/getFollowers', this.twitterClient.getFollowers);
        this.app.get('/getFollowing', this.twitterClient.getFollowing);
        this.app.get('/getUserInfo', this.twitterClient.getUserInfo);
    }

    start (){
        console.log("App listening on port 3000");
        this.app.listen(3000);
    }
}

new Server();
