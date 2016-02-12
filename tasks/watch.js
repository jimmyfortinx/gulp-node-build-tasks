'use strict';

var path = require('path');
var common = require('gulp-common-build-tasks');

var $ = require('./utils/plugins-loader');

var tasks = common.tasks();

tasks.import(require('./unit-tests'));

tasks.create('.watch', function(gulp, config, callback) {
    var runSequence = require('run-sequence').use(gulp);

    var tasks = [
        'node.scripts',
        'node.test'
    ];

    runSequence(
        tasks,
        function() {
            gulp.watch(path.join(config.paths.src, '/**/*.js'), tasks);

            callback();
        });
});

tasks.create('.watch:dist', ['.build', '.test'], function(gulp, config) {
    gulp.watch(path.join(config.paths.src, '/**/*.js'), tasks);
});

module.exports = tasks;
