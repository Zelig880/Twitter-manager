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
    }

    getStatuses(req, res, arg) {
        var params = {screen_name: "Zelig880"};
        this.client
            .get('statuses/user_timeline', params)
            .then(function(error, tweets, response) {
                if (!error) {
                    res.json({success: true, data:tweet});
                }

                res.json({success: false, data:error});
            })
            .catch(function (error) {
                res.json({success: false, data:error});
            })

    }
}

module.exports =  TwitterApi;