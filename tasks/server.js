'use strict';

var path = require('path');

var $ = require('./utils/plugins-loader');
var tasksRegister = require('./utils/tasks-register');
var buildModule = require('./build');

function serve (directory) {
    $.nodemon({
        script: path.join(directory, 'server.js'),
        watch: [path.join(directory, '**/*.js')]
    });
}

exports.serve = function (config) {
    serve(config.paths.src);
}

exports.serveDist = function (config, gulp, callback) {
    var runSequence = require('run-sequence').use(gulp);

    return runSequence(
        tasksRegister.getSubTask('build'),
        tasksRegister.getSubTask('watch:dist'),
        function () {
            serve(config.paths.dist);
            callback();
        }
    )
}

exports.registerSubTasks = function (config, gulp) {
    var tasks = {
        'serve': true,
        'serve:dist': 'serveDist'
    };

    tasksRegister.registerSubTasks(exports, config, gulp, tasks);
}

exports.registerTasks = function (config, gulp) {
    exports.registerSubTasks(config, gulp);

    var tasks = {
        'serve': true,
        // Used by Visual Studio Code to run debugger
        'start': 'serve',
        'serve:dist': true,
    };

    tasksRegister.registerTasks(gulp, tasks);
}