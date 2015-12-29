var _ = require('lodash');

module.exports = function (userConfig) {
    var newConfig = {
        paths: {
            src: _.get(userConfig, 'paths.src', 'src'),
            dist: _.get(userConfig, 'paths.dist', 'dist'),
            tmp: _.get(userConfig, 'paths.tmp', '.tmp'),
            e2e: _.get(userConfig, 'paths.e2e', 'e2e')
        },

        jshint: {
            node: true,
            globals : {
                /* jasmine */
                "describe"   : false,
                "xdescribe"  : false,
                "fdescribe"  : false,
                "it"         : false,
                "xit"        : false,
                "fit"        : false,
                "before"     : false,
                "beforeEach" : false,
                "after"      : false,
                "afterEach"  : false,
                "jasmine"    : false,
                "expect"     : false
            }
        }
    };

    return newConfig;
}