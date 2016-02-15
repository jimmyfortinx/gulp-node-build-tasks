'use strict';

var path = require('path');
var common = require('gulp-common-build-tasks');

var $ = require('./utils/plugins-loader');

var tasks = common.tasks();

tasks.import(require('./scripts'));

tasks.create('.clean', function(gulp, config) {
    return $.del([
        path.join(config.paths.dist, '/'),
        path.join(config.paths.tmp, '/')
    ]);
});

tasks.create('.copy:npmDependencies', function(gulp, config) {
    return gulp.src($.npmFiles(), { base: './' })
        .pipe(gulp.dest(path.join(config.paths.dist, '/')));
});

tasks.create('.build', ['.copy:npmDependencies', '.scripts:dist']);

module.exports = tasks;
