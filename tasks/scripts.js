'use strict';

var path = require('path');
var common = require('gulp-common-build-tasks');

var $ = require('./utils/plugins-loader');

var tasks = common.tasks();

tasks.import(common.scripts);

tasks.create('.scripts:copy', function(gulp, config) {
    return gulp.src(path.join(config.paths.src, '/**/*.js'))
        .pipe(gulp.dest(path.join(config.paths.dist, '/')))
        .pipe($.size({ title: path.join(config.paths.dist, '/'), showFiles: true }));
});

tasks.create('.scripts', function(gulp, config, callback) {
    var runSequence = require('run-sequence').use(gulp);

    var tasks = [];

    if (config.jshintEnabled) {
        tasks.push('node.jshint');
    }

    if (config.jscsEnabled) {
        tasks.push('node.jscs');
    }

    if (tasks.length === 0) {
        callback();
    } else {
        runSequence(tasks, callback);
    }
});

tasks.create('.scripts:dist', function(gulp, config, callback) {
    var runSequence = require('run-sequence').use(gulp);

    var tasks = [];

    if (config.jshintEnabled) {
        tasks.push('node.jshint');
    }

    if (config.jscsEnabled) {
        tasks.push('node.jscs');
    }

    tasks.push('node.scripts:copy');

    if (tasks.length === 0) {
        callback();
    } else {
        runSequence(tasks, callback);
    }
});

module.exports = tasks;
