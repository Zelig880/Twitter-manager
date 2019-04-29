var Twitter = require('twitter');
var Config = require('./config');

class TwitterApi {
    constructor() {
        this.client = new Twitter({
            consumer_key: Config.twitterApi.CONSUMER_KEY,
            consumer_secret: Config.twitterApi.CONSUMER_SECRET,
            access_token_key: Config.twitterApi.ACCESS_TOKEN_KEY,
            access_token_secret: Config.twitterApi.ACCESS_TOKEN_SECRET
        });

        this.getStatuses = this.getStatuses.bind(this);
        this.getFriends = this.getFriends.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
    }

    getFriends(req, res, arg) {

        var params = {screen_name: "Zelig880"};
        
        this.client
            .get('followers/ids', params)
            .then( (tweets) => {
                res.json({success: true, data:tweets});
            })
            .catch((error) => {
                res.json({success: false, data:error});
            })
    }
    
    getUserInfo(req, res, arg) {

        var params = {screen_name: "Zelig880"};
        
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
        var params = {screen_name: "Zelig880"};
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