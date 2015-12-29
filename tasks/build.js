'use strict';

var path = require('path');

var $ = require('./utils/plugins-loader');
var tasksRegister = require('./utils/tasks-register');

exports.clean = function (config) {
    return $.del([
        path.join(config.paths.dist, '/'),
        path.join(config.paths.tmp, '/')
    ]);
}

exports.copyScripts = function (config, gulp) {
    return gulp.src(path.join(config.paths.src, '/**/*.js'))
        .pipe(gulp.dest(path.join(config.paths.dist, '/')))
        .pipe($.size({ title: path.join(config.paths.dist, '/'), showFiles: true }));
}

exports.copyNpmDependencies = function (config, gulp) {
    return gulp.src($.npmFiles(), {base:'./'})
        .pipe(gulp.dest(path.join(config.paths.dist, '/')));
}

exports.build = function (config, gulp, callback) {
    var runSequence = require('run-sequence').use(gulp);

    runSequence(
        [
            tasksRegister.getSubTask('copy:npmDependencies'),
            tasksRegister.getSubTask('copy:scripts')
        ],
        callback);
}

exports.registerSubTasks = function (config, gulp) {
    var tasks = {
        'build': true,
        'clean': true,
        'copy:scripts': 'copyScripts',
        'copy:npmDependencies': 'copyNpmDependencies'
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