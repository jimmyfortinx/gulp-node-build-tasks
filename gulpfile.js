var gulp = require('gulp');
var gulpNodeBuildTasks = require('./tasks');

var config = {
    projectDirectory: __dirname,
    paths: {
        src: 'tasks'
    }
};

gulpNodeBuildTasks.apply(config, gulp);
