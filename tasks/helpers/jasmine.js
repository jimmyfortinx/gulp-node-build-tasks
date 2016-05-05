'use strict';

var $ = require('../utils/plugins-loader');

var JasmineTerminalReporter = require('jasmine-terminal-reporter');

exports.task = function(getFiles) {
    return function(gulp, config) {
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

        return gulp.src(getFiles(config))
            .pipe($.plumber(plumberOptions))
            .pipe($.jasmine({
                reporter: jasmineTerminalReporter
            }));
    };
};
