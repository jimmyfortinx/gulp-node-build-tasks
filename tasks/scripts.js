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

tasks.create('.scripts', ['.lint']);

tasks.create('.scripts:dist', ['.lint', '.scripts:copy']);

module.exports = tasks;
