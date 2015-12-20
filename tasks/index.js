var path = require('path');
var $ = require('./utils/plugins-loader');

var server = require('./server');

var gulp;
var config;

exports.use = function (userGulp) {
    gulp = userGulp;
}

exports.configure = function (userConfig) {
    config = require('./config')(userConfig);
}

exports.registerTasks = function () {
    if(!gulp) {
        gulp = require('gulp');
    }

    if(!config) {
        config = require('./config')();
    }

    server.registerTasks(config, gulp);
}

exports.serve = server.serve;