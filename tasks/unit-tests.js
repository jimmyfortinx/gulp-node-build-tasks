'use strict';

var path = require('path');
var common = require('gulp-common-build-tasks');

var $ = require('./utils/plugins-loader');
var tasks = common.tasks();

var JasmineTerminalReporter = require('jasmine-terminal-reporter');

tasks.import(require('./build'));

tasks.create('.test', function(gulp, config) {
    var plumberOptions = {
        errorHandler: function(error) {
            if (!config.jscsEnabled || error.name !== 'SyntaxError') {
                // We don't log syntax error because it is covered with jscs
                console.log(error.toString());
            }

            this.emit('end');
        }
    };

    var jasmineTerminalReporter = new JasmineTerminalReporter(config.jasmineTerminalReporter);

    return gulp.src(path.join(config.paths.src, '/**/*.spec.js'))
        .pipe($.plumber(plumberOptions))
        .pipe($.jasmine({
            reporter: jasmineTerminalReporter
        }));
});

module.exports = tasks;
