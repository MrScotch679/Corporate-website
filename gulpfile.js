'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const image = require('gulp-image');
const webpack = require('webpack-stream');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

const pathes = {
    root: 'dist/',
    styles: {
        src: './src/sass/**/*.scss',
        dest: './dist/css'
    },
    layout: {
        src: './src/*.html',
        dest: './dist/'
    },
    images: {
        src: './src/img/**',
        dest: './dist/img/'
    },
    icons: {
        src: './src/icons/**',
        dest: './dist/icons/'
    },
    js: {
        src: './src/js/**/*.js',
        dest: './dist/js/'
    }
};

//brows
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

//clean
function clean() {
    return del(pathes.root);
}

//styles
gulp.task('sass-compiler', () => {
    return gulp.src(pathes.styles.src)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename('app.css'))
    .pipe(gulp.dest(pathes.styles.dest))
    .pipe(browserSync.stream());
});

//layouts
gulp.task('html-compiler', () => {
    return gulp.src(pathes.layout.src)
    .pipe(gulp.dest(pathes.layout.dest))
    .pipe(browserSync.stream());
});

//imges
gulp.task('images-compiler', () => {
    return gulp.src(pathes.images.src)
    .pipe(image({
        jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80]
    }))
    .pipe(gulp.dest(pathes.images.dest));
});

//icons
gulp.task('icons-compiler', () => {
    return gulp.src(pathes.icons.src)
    .pipe(image({
        jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80]
    }))
    .pipe(gulp.dest(pathes.icons.dest));
});


//js
gulp.task('js-compiler', () => {
    return gulp.src(pathes.js.src)
    .pipe(
        webpack({
            mode: 'development',
            output: {
              filename: 'main.js',
            },
            devtool: 'source-map',
            module: {
                rules: [
                  {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env']
                      }
                    }
                  }
                ]
            }
        })
      )
    .pipe(gulp.dest(pathes.js.dest));
});

//watch
gulp.task('watch', () => {
    gulp.watch(pathes.styles.src, gulp.parallel('sass-compiler'));
    gulp.watch(pathes.layout.src, gulp.parallel('html-compiler'));
    gulp.watch(pathes.js.src, gulp.parallel('js-compiler'));
});

gulp.task('default', gulp.series(
    clean,
    gulp.parallel('watch', 'icons-compiler', 'images-compiler', 'sass-compiler', 'html-compiler', 'js-compiler', 'browser-sync') 
));

exports.clean = clean;