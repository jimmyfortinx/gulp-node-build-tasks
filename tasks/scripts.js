'use strict';

var path = require('path');
var common = require('gulp-common-build-tasks');

var $ = require('./utils/plugins-loader');
var tasksRegister = require('./utils/tasks-register');

exports.copy = function (config, gulp) {
    return gulp.src(path.join(config.paths.src, '/**/*.js'))
        .pipe(gulp.dest(path.join(config.paths.dist, '/')))
        .pipe($.size({ title: path.join(config.paths.dist, '/'), showFiles: true }));
}

exports.scripts = function (config, gulp, callback) {
    var runSequence = require('run-sequence').use(gulp);

    var tasks = [];

    if (config.jshintEnabled) {
        tasks.push(tasksRegister.getSubTask('scripts:jshint'));
    }

    if (config.jscsEnabled) {
        tasks.push(tasksRegister.getSubTask('scripts:jscs'));
    }

    runSequence(tasks, callback);
}

exports.scriptsDist = function (config, gulp, callback) {
    var runSequence = require('run-sequence').use(gulp);

    var tasks = [];

    if (config.jshintEnabled) {
        tasks.push(tasksRegister.getSubTask('scripts:jshint'));
    }

    if (config.jscsEnabled) {
        tasks.push(tasksRegister.getSubTask('scripts:jscs'));
    }

    tasks.push(tasksRegister.getSubTask('scripts:copy'));

    runSequence(tasks, callback);
}

exports.registerSubTasks = function (config, gulp) {
    var commonTasks = {
        'scripts:jshint': 'jshint',
        'scripts:jscs': 'jscs',
    }

    var tasks = {
        'scripts:copy': 'copy',
        'scripts': true,
        'scripts:dist': 'scriptsDist'
    };

    tasksRegister.registerSubTasks(common.scripts, config, gulp, commonTasks);
    tasksRegister.registerSubTasks(exports, config, gulp, tasks);
}

exports.registerTasks = function (config, gulp) {
    exports.registerSubTasks(config, gulp);
}