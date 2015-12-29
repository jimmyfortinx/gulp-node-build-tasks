'use strict';

var path = require('path');

var $ = require('./utils/plugins-loader');
var tasksRegister = require('./utils/tasks-register');
var unitTestsModule = require('./unit-tests');

exports.watch = function (config, gulp, callback) {
    var runSequence = require('run-sequence').use(gulp);

    var tasks = [
        tasksRegister.getSubTask('test')
    ];

    runSequence(
        tasks,
        function () {
            gulp.watch(path.join(config.paths.src, '/**/*.js'), tasks);

            callback();
        });
}

exports.watchDist = function (config, gulp, callback) {
    var runSequence = require('run-sequence').use(gulp);

    var tasks = [
        tasksRegister.getSubTask('build'),
        tasksRegister.getSubTask('test')
    ];

    runSequence(
        tasks,
        function () {
            gulp.watch(path.join(config.paths.src, '/**/*.js'), tasks);

            callback();
        });
}

exports.registerSubTasks = function (config, gulp) {
    var tasks = {
        'watch': 'watch',
        'watch:dist': 'watchDist'
    };

    tasksRegister.registerSubTasks(exports, config, gulp, tasks);
}

exports.registerTasks = function (config, gulp) {
    exports.registerSubTasks(config, gulp);

    var tasks = {
        'watch': true,
        'watch:dist': true
    };

    tasksRegister.registerTasks(gulp, tasks);
}