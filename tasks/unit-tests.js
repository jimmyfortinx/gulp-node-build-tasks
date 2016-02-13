'use strict';

var path = require('path');

var $ = require('./utils/plugins-loader');
var tasksRegister = require('./utils/tasks-register');
var buildModule = require('./build');

exports.test = function(config, gulp) {
    var plumberOptions = {
        errorHandler: function(error) {
            if (config.jscsEnabled && error.name !== 'SyntaxError') {
                // We don't log syntax error because it is covered with jscs
                console.log(error.toString());
            }

            this.emit('end');
        }
    };

    return gulp.src(path.join(config.paths.src, '/**/*.spec.js'))
        .pipe($.plumber(plumberOptions))
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
