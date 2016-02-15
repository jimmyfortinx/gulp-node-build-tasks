var _ = require('lodash');

var common = require('gulp-common-build-tasks');

module.exports = function(userConfig) {
    var newConfig = {
        paths: {
            src: _.get(userConfig, 'paths.src', 'src'),
            dist: _.get(userConfig, 'paths.dist', 'dist'),
            tmp: _.get(userConfig, 'paths.tmp', '.tmp'),
            e2e: _.get(userConfig, 'paths.e2e', 'e2e')
        },

        jasmineTerminalReporter: {
            includeStackTrace: _.get(userConfig, 'unitTest.showTrace', false)
        }
    };

    common.config.apply(newConfig, userConfig);

    return newConfig;
};
