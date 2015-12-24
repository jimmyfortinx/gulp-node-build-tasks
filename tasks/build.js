'use strict';

var path = require('path');
var runSequence = require('run-sequence');

var $ = require('./utils/plugins-loader');
var tasksRegister = require('./utils/tasks-register');

exports.clean = function (config) {
    return $.del([
        path.join(config.paths.dist, '/'),
        path.join(config.paths.tmp, '/')
    ]);
}

exports.build = function (config, gulp) {
    return gulp.src(path.join(config.paths.src, '/**/*.js'))
        .pipe(gulp.dest(path.join(config.paths.dist, '/')))
        .pipe($.size({ title: path.join(config.paths.dist, '/'), showFiles: true }));
}

exports.registerSubTasks = function (config, gulp) {
    var tasks = {
        'build': true,
        'clean': true
    };

    tasksRegister.registerSubTasks(exports, config, gulp, tasks);
}

exports.registerTasks = function (config, gulp) {
    exports.registerSubTasks(config, gulp);

    var tasks = {
        'build': true,
        'clean': true
    };

    tasksRegister.registerTasks(gulp, tasks);
}