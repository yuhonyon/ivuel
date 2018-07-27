const gulp = require("gulp");
const $ = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');




const processors=[autoprefixer,
  cssnano({
  zindex:false,
  reduceIdents:false
})];

gulp.task('default',['less','fonts']);

// gulp.task('img', function(cb) {
//     return gulp.src('../src/styles/images/*.@[gif|png|jpg]')
//         .pipe($.imagemin({
//           interlaced: true,
//           progressive: true,
//           optimizationLevel: 5,
//           svgoPlugins: [{removeViewBox: true}]
//           }))
//         .pipe(gulp.dest('../dist/images'));
// });



gulp.task('less', function () {
    return gulp.src('../src/styles/index.less')
        .pipe($.sourcemaps.init())
        .pipe($.less())
        .pipe($.postcss(processors))
        //.pipe($.cleanCSS())
        .pipe($.rename('iview.css'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('../dist/styles'));
});


gulp.task('fonts', function () {
    return gulp.src('../src/styles/common/iconfont/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
});
