'use strict';

var path = require('path');

var $ = require('./utils/plugins-loader');
var tasksRegister = require('./utils/tasks-register');

exports.jshint = function (config, gulp) {
    return gulp.src(path.join(config.paths.src, '/**/*.js'))
        .pipe($.jshint(config.jshint))
        .pipe($.jshint.reporter('default'));
}

exports.jscs = function (config, gulp) {
    return gulp.src(path.join(config.paths.src, '/**/*.js'))
        .pipe($.jscs())
        .pipe($.jscs.reporter());
}

exports.copy = function (config, gulp) {
    return gulp.src(path.join(config.paths.src, '/**/*.js'))
        .pipe(gulp.dest(path.join(config.paths.dist, '/')))
        .pipe($.size({ title: path.join(config.paths.dist, '/'), showFiles: true }));
}

exports.scripts = function (config, gulp, callback) {
    var runSequence = require('run-sequence').use(gulp);

    runSequence(
        [
            tasksRegister.getSubTask('scripts:jshint'),
            tasksRegister.getSubTask('scripts:jscs')
        ],
        callback
    );
}

exports.scriptsDist = function (config, gulp, callback) {
    var runSequence = require('run-sequence').use(gulp);

    runSequence(
        [
            tasksRegister.getSubTask('scripts:jshint'),
            tasksRegister.getSubTask('scripts:jscs'),
            tasksRegister.getSubTask('scripts:copy')
        ],
        callback
    );
}

exports.registerSubTasks = function (config, gulp) {
    var tasks = {
        'scripts:jshint': 'jshint',
        'scripts:jscs': 'jscs',
        'scripts:copy': 'copy',
        'scripts': true,
        'scripts:dist': 'scriptsDist'
    };

    tasksRegister.registerSubTasks(exports, config, gulp, tasks);
}

exports.registerTasks = function (config, gulp) {
    exports.registerSubTasks(config, gulp);
}