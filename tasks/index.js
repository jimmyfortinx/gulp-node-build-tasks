var path = require('path');
var $ = require('./utils/plugins-loader');

function gulpAppBuildTasks (userConfig, gulp) {
    var config = require('./config')(userConfig);

    if(!gulp) {
        gulp = require('gulp');
    }

    gulp.task('test', function () {
        console.log('Show a test message');
    });
}

module.exports = gulpAppBuildTasks;