var gulp = require('gulp');
var gulpNodeBuildTasks = require('./tasks');

var config = {
    paths: {
        src: 'tasks'
    }
};

gulpNodeBuildTasks.use(gulp);
gulpNodeBuildTasks.configure(config);
gulpNodeBuildTasks.registerTasks();