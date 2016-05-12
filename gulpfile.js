var
    gulp = require('gulp'),
    configTransform = require('gulp-config-transform');

gulp.task('default', function () {
    var options = { 
        transform: './Web.Release.config',
        config: './Web.Config',
        destination: './My.Config'
        //,assemblyFile: 'C:\\Program Files (x86)\\MSBuild\\Microsoft\\VisualStudio\\v14.0\\Web\\Microsoft.Web.Publishing.Tasks.dll'
     };
    configTransform(options);
});
