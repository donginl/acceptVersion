'use strict';
const semver = require('semver');

module.exports = function(versions) {
    if (!Array.isArray(versions)) {
        versions = [versions];
    }

    return function(req, res, next) {
        var version = req.get('Accept-Version') || '*',
            maximum = semver.maxSatisfying(versions, version);

        if (maximum) {
            req.acceptVersion = maximum;
            next()
        } else {
            var err = new Error('%s is not supported', version);
            err.status = 406;
            next(err)
        }
    };
};
