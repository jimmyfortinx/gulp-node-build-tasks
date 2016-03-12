'use strict';

var path = require('path');
var common = require('gulp-common-build-tasks');

var tasks = common.tasks();

tasks.import(require('./build'));

var jasmineHelpers = require('./helpers/jasmine');

var getFiles = function(config) {
    return path.join(config.paths.src, '**/*.spec.js');
};

tasks.create('.test', jasmineHelpers.task(getFiles));

module.exports = tasks;
