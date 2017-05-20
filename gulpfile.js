var gulp=require('gulp'),
    gutil=require('gulp-util');
var browserSync = require('browser-sync').create();


gulp.task('default',function () {
    return gutil.log("gulp running!");
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});