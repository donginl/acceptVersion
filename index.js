// import dependencies
var semver = require('semver');

module.exports = function(versions) {
    if (!Array.isArray(versions)) {
        versions = [versions];
    }

    return function(req, res, next) {
        var version = req.header('Accept-Version') || req.header('accept-version') || '*';
        var maximum = semver.maxSatisfying(versions, version);

        if (maximum) {
            req.acceptVersion = maximum;
            next();
        } else {
            var err = new Error('%s is not supported', version);
            err.code = 406;
            next(err);
        }
    };
};
