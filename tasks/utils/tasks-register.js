var _ = require("lodash");

var subTasksPrefix = 'node-server:';

function hasCopyFlag (name) {
    return name === true;
}

function getDestinationName(name, taskName) {
    return hasCopyFlag(name) ? taskName : name;
}

exports.registerTasks = function (gulp, tasks) {
    _.forEach(tasks, registerOne);

    function registerOne (subTaskName, taskName) {
        var partialSubTaskName = getDestinationName(subTaskName, taskName);
        var completeSubTaskName = exports.getSubTask(partialSubTaskName);

        gulp.task(taskName, [completeSubTaskName]);
    }
}

exports.registerSubTasks = function (module, config, gulp, tasks) {
    _.forEach(tasks, registerOne);

    function registerOne (taskFunctionName, taskName) {
        taskFunctionName = getDestinationName(taskFunctionName, taskName);
        var subTaskName = exports.getSubTask(taskName);

        if (hasCallback(taskFunctionName)) {
            gulp.task(subTaskName, function (callback) {
                module[taskFunctionName](config, gulp, callback);
            });
        } else {
            gulp.task(subTaskName, function () {
                module[taskFunctionName](config, gulp);
            });
        }
    }

    function hasCallback (taskFunctionName) {
        return module[taskFunctionName].length === 3;
    }
}

exports.getSubTask = function (task) {
    return subTasksPrefix + task;
}