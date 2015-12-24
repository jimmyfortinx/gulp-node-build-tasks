var _ = require('lodash');

module.exports = function (userConfig) {
    var newConfig = {
        paths: {
            src: _.get(userConfig, 'paths.src', 'src'),
            dist: _.get(userConfig, 'paths.dist', 'dist'),
            tmp: _.get(userConfig, 'paths.tmp', '.tmp'),
            e2e: _.get(userConfig, 'paths.e2e', 'e2e')
        }
    }

    return newConfig;
}