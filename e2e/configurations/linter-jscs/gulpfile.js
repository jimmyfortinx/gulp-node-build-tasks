var gulp = require('gulp');
var gulpNodeBuildTasks = require('../../../tasks');

var config = {
    projectDirectory: __dirname
};

gulpNodeBuildTasks.apply(config, gulp);
