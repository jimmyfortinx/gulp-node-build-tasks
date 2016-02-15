'use strict';

var path = require('path');
var common = require('gulp-common-build-tasks');

var $ = require('./utils/plugins-loader');
var tasks = common.tasks();

tasks.import(require('./watch'));

function serve(directory) {
    $.nodemon({
        script: path.join(directory, 'server.js'),
        watch: [path.join(directory, '**/*.js')]
    });
}

tasks.create('.serve', function(gulp, config) {
    serve(config.paths.src);
});

tasks.create('.serve:dist', ['.build', '.watch:dist'], function(gulp, config) {
    serve(config.paths.dist);
});

module.exports = tasks;
