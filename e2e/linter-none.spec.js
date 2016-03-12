var gulpUtils = require('gulp-common-build-tasks').gulpUtils;
var testsUtils = require('gulp-common-build-tasks').tests;
require('should');

testsUtils.addMatchers();

describe('linter-none', function() {
    var configuration = new testsUtils.Configuration(__dirname, 'linter-none');

    beforeAll(function(done) {
        configuration.copy()
            .then(done);
    });

    describe('build', function() {
        var linterNoneBuildLogs;

        beforeAll(function(done) {
            configuration.exec('gulp build')
                .then(function(result) {
                    linterNoneBuildLogs = result.stdout;
                    done();
                });
        });

        it('finishes build task', function() {
            linterNoneBuildLogs.should
                .containsLog('Finished \'node.copy:npmDependencies\' after')
                .containsLog('Finished \'node.scripts:copy\' after')
                .containsLog('Finished \'node.scripts:dist\' after')
                .containsLog('Finished \'node.build\' after')
                .containsLog('Finished \'build\' after');
        });

        it('files copied in dist are right', function() {
            configuration.actualDist.should
                .be.equalDirectory(configuration.expectedDist);
        });
    });
});
