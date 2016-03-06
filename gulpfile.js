var gulp = require('gulp');
var gulpNodeBuildTasks = require('./tasks');

var config = {
    projectDirectory: __dirname,
    paths: {
        src: 'tasks'
    },
    lint: ['jshint', 'jscs']
};

gulpNodeBuildTasks.apply(config, gulp);
