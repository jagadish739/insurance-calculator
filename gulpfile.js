var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css');

var jsFilePath = function(file) {
    return './app/scripts/' + file + '.js';
}

gulp.task('javascript', () => {
    return gulp.src([
            jsFilePath('app'),
            jsFilePath('**/*')
        ])
        .pipe(concat('all.js'))
        .pipe(connect.reload())
        .pipe(gulp.dest('./app/public/scripts'));
});

var libs = [
    './app/dependencies/jquery/dist/jquery.js',
    './app/dependencies/angular/angular.js',
    './app/dependencies/angular-bootstrap/ui-bootstrap.js',
    './app/dependencies/angularjs-slider/dist/rzslider.js'
];

gulp.task('libs', () => {
    return gulp.src(libs)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./app/public/scripts'));
});

gulp.task('sass', () => {
    return gulp.src('./app/sass/main.sass')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
       .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./app/public/css/'))
        .pipe(connect.reload());

});

gulp.task('jade', () => {
    return gulp.src('./app/jade/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./app/html/'))
        .pipe(connect.reload());
});

gulp.task('html', () => {
    gulp.src('./app/index.html')
        .pipe(connect.reload());
});

gulp.task('css', () => {
    gulp.src('./app/public/css/main.css')
        .pipe(connect.reload());
});

gulp.task('connect', () => {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('jade', () => {
    return gulp.src('./app/templates/jade/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./app/templates/html/'))
        .pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch('./app/sass/*.sass', ['sass']);
    gulp.watch('./app/index.html', ['html']);
    gulp.watch('./app/css/main.css', ['css']);
    gulp.watch('./app/templates/jade/**/*.jade', ['jade']);
    gulp.watch('./app/scripts/**/*.js', ['javascript']);
});

gulp.task('default', ['connect', 'watch', 'jade', 'css', 'html', 'sass', 'javascript', 'libs']);