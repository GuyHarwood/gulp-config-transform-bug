var
    gulp = require('gulp'),
    configTransform = require('gulp-config-transform');

if (true === false) {
    var gulp_src = gulp.src;
    gulp.src = function () {
        return gulp_src.apply(gulp, arguments)
            .pipe(plumber(function (error) {
                // Output an error message
                gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
                // emit the end event, to properly end the task
                this.emit('end');
            })
            );
    };
}

gulp.task('default', function () {
    var options = { 
        transform: './Web.Release.config',
        config: './Web.Config',
        destination: './My.Config'
        // ,assemblyFile: 'C:\\Program Files (x86)\\MSBuild\\Microsoft\\VisualStudio\\v14.0\\Web\\Microsoft.Web.Publishing.Tasks.dll'
     };
    var result = configTransform(options);
    //return gulp.dest(result);
});
