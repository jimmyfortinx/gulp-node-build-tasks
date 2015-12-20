'use strict';

var path = require('path');

var $ = require('./utils/plugins-loader');

exports.serve = function (config) {
    $.nodemon({
        script: path.join(config.paths.src, 'server.js'),
        watch: [path.join(config.paths.src, '**/*.js')]
    });
}

exports.registerTasks = function (config, gulp) {
    gulp.task('serve', function () {
        exports.serve(config);
    });

    // Used by Visual Studio Code to run debugger
    gulp.task('start', ['serve']);
}