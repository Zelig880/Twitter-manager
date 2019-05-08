var memoryCache = require('memory-cache');

class Cache {

    constructor (durationInSeconds = 600){
        this._defaultCacheInSeconds = durationInSeconds;
        this.middleware = this.middleware.bind(this);
    }

    middleware(req, res, next){

        if(req.method !== "GET") next()

        let key = '__express__' + req.originalUrl || req.url
        let cachedBody = memoryCache.get(key)
        if (cachedBody) {
            res.send(cachedBody)
            return
        } else {
            res.sendResponse = res.send
            res.send = (body) => {
                memoryCache.put(key, body, this._defaultCacheInSeconds * 1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}

module.exports = Cache;