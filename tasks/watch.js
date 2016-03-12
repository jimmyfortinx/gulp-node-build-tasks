'use strict';

var path = require('path');
var common = require('gulp-common-build-tasks');

var $ = require('./utils/plugins-loader');

var tasks = common.tasks();

var gulpUtils = common.gulpUtils;

tasks.import(require('./unit-tests'));
tasks.import(require('./e2e'));

tasks.create('.watch', ['.scripts', '.test'], function(gulp, config) {
    gulp.watch(path.join(config.paths.src, '/**/*.js'), ['node.scripts', 'node.test']);
});

tasks.create('.watch:dist', ['.build', '.test'], function(gulp, config) {
    gulp.watch(path.join(config.paths.src, '/**/*.js'), ['node.build', 'node.test']);
});

tasks.create('.watch:e2e', ['.scripts', '.e2e'], function(gulp, config) {
    var folders = [
        config.paths.src,
        config.paths.e2e
    ];

    gulp.watch(gulpUtils.files(folders, '/**/*.js'), ['node.scripts', 'node.e2e']);
});

tasks.create('.watch:test-e2e', ['.scripts', '.test', '.e2e'], function(gulp, config) {
    var folders = [
        config.paths.src,
        config.paths.e2e
    ];

    gulp.watch(gulpUtils.files(folders, '/**/*.js'), ['node.scripts', 'node.test', 'node.e2e']);
});

module.exports = tasks;
