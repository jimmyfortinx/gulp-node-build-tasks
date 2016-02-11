'use strict';

var path = require('path');

var $ = require('./utils/plugins-loader');
var tasksRegister = require('./utils/tasks-register');
var buildModule = require('./build');

exports.test = function(config, gulp) {
    return gulp.src(path.join(config.paths.src, '/**/*.spec.js'))
        .pipe($.jasmine());
};

exports.registerSubTasks = function(config, gulp) {
    var tasks = {
        'test': true
    };

    tasksRegister.registerSubTasks(exports, config, gulp, tasks);
};

exports.registerTasks = function(config, gulp) {
    exports.registerSubTasks(config, gulp);

    var tasks = {
        'test': true
    };

    tasksRegister.registerTasks(gulp, tasks);
};
