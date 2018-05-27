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

    watch('./app/assets/scripts/**/*.js', function() {
      gulp.start('scriptRefreshed');
    });
});

gulp.task('serve', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
               .pipe(browserSync.stream());
});

gulp.task('scriptRefreshed', ['scripts'], function() {
  browserSync.reload();
});
