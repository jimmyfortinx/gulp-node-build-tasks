var gulp = require('gulp');
var gulpNodeBuildTasks = require('./tasks');

gulpNodeBuildTasks.use(gulp);
gulpNodeBuildTasks.registerTasks();