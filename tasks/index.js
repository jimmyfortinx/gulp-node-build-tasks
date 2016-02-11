var path = require('path');
var $ = require('./utils/plugins-loader');

var scriptsModule = require('./scripts');
var buildModule = require('./build');
var unitTestsModule = require('./unit-tests');
var watchModule = require('./watch');
var serverModule = require('./server');

var gulp;
var config;

exports.use = function(userGulp) {
    gulp = userGulp;
};

exports.configure = function(userConfig) {
    config = require('./config')(userConfig);
};

exports.registerSubTasks = function() {
    defineGulpAndConfigIfMissing();

    scriptsModule.registerSubTasks(config, gulp);
    buildModule.registerSubTasks(config, gulp);
    unitTestsModule.registerSubTasks(config, gulp);
    watchModule.registerSubTasks(config, gulp);
    serverModule.registerSubTasks(config, gulp);
};

exports.registerTasks = function() {
    defineGulpAndConfigIfMissing();

    scriptsModule.registerTasks(config, gulp);
    buildModule.registerTasks(config, gulp);
    unitTestsModule.registerTasks(config, gulp);
    watchModule.registerTasks(config, gulp);
    serverModule.registerTasks(config, gulp);
};

exports.build = buildModule.build;
exports.serve = serverModule.serve;

function defineGulpAndConfigIfMissing() {
    if (!gulp) {
        gulp = require('gulp');
    }

    if (!config) {
        config = require('./config')();
    }
}
