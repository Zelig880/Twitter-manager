var Twitter = require('twitter');
var Config = require('./config');
var dummyData = require('./assets/dummy.followers.json');

class TwitterApi {
    constructor() {
        this.client = new Twitter({
            consumer_key: Config.twitterApi.CONSUMER_KEY,
            consumer_secret: Config.twitterApi.CONSUMER_SECRET,
            access_token_key: Config.twitterApi.ACCESS_TOKEN_KEY,
            access_token_secret: Config.twitterApi.ACCESS_TOKEN_SECRET
        });

        this.screen_name = Config.twitterApi.SCREEN_NAME

        this.getStatuses = this.getStatuses.bind(this);
        this.getFollowers = this.getFollowers.bind(this);
        this.getFollowing = this.getFollowing.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
    }
    
    getDummyFollowers(req, res, arg) {
        
        res.json({success: true, data:dummyData});
    }

    getFollowers(req, res, arg) {

        var params = {screen_name: this.screen_name};
        
        this.client
            .get('followers/list', params)
            .then( (tweets) => {
                res.json({success: true, data:tweets});
            })
            .catch((error) => {
                res.json({success: false, data:error});
            })
    }

    getFollowing(req, res, arg) {

        var params = {screen_name: this.screen_name};
        
        this.client
            .get('friends/list', params)
            .then( (tweets) => {
                res.json({success: true, data:tweets});
            })
            .catch((error) => {
                res.json({success: false, data:error});
            })
    }
    
    getUserInfo(req, res, arg) {

        var params = {screen_name: this.screen_name};
        
        this.client
            .get('users/show', params)
            .then( (tweets) => {
                res.json({success: true, data:tweets});
            })
            .catch((error) => {
                res.json({success: false, data:error});
            })
    }

    getStatuses(req, res, arg) {
        var params = {screen_name: this.screen_name};
        this.client
            .get('statuses/user_timeline', params)
            .then( (tweets) => {
                res.json({success: true, data:tweets});
            })
            .catch((error) => {
                res.json({success: false, data:error});
            })

    }
}

module.exports =  TwitterApi;