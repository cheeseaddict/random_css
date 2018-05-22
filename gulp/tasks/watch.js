var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(); 
    
gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: "./app"
    });

    watch('./app/index.html', function() {
        browserSync.reload()
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('serve');
    });
});

gulp.task('serve', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
               .pipe(browserSync.stream());
});