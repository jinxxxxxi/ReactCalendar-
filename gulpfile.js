var gulp = require("gulp");
var less = require('gulp-less');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var watch = require("gulp-watch");
// var webpack = require('webpack');
// var webpackconfig = require('./webpack.config.js');
// var pump   = require('pump');

gulp.task("print", function () {
    console.log("打印123");
});
gulp.task("haha", function () {
    console.log("haha")
});
gulp.task("all", gulp.parallel("print", "haha"), () => {

});
gulp.task('less', function () {
    //**表示可有这级也可以没有，**、*.less表示把一级的less和二级的less文件全部编译
    gulp.src('./css/**/*.less')
        .pipe(less())//编译
        // .pipe(concat('all.css'))//合并为all.css
        .pipe(csso())//压缩
        .pipe(gulp.dest('dist/css'))//导出

});

// gulp.task('webpacktest',function () {
//     webpack(webpackconfig);
// })

//实施监听
gulp.task('watch',function(){
    watch('./css/**/*.less',gulp.series('less'));
});