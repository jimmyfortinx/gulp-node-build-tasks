'use strict';

var path = require('path');

var $ = require('./utils/plugins-loader');
var tasksRegister = require('./utils/tasks-register');

exports.watchDist = function (config, gulp) {
    gulp.watch(path.join(config.paths.src, '/**/*.js'), [
        tasksRegister.getSubTask('build')
    ]);
}

exports.registerSubTasks = function (config, gulp) {
    var tasks = {
        'watch:dist': 'watchDist'
    };

    tasksRegister.registerSubTasks(exports, config, gulp, tasks);
}

exports.registerTasks = function (config, gulp) {
    exports.registerSubTasks(config, gulp);
}