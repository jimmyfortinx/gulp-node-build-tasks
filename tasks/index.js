var common = require('gulp-common-build-tasks');

var tasks = common.tasks('node');

tasks.addTransformConfigurationFunction(require('./config'));
tasks.import(require('./server'));

tasks.create('build', ['.build']);
tasks.create('clean', ['.clean']);
tasks.create('serve', ['.serve']);
// Used by Visual Studio Code to run debugger
tasks.create('start', ['.serve']);
tasks.create('serve:dist', ['.serve:dist']);
tasks.create('test', ['.test']);
tasks.create('test:auto', ['.watch']);
tasks.create('test:auto:dist', ['.watch:dist']);

module.exports = tasks;
