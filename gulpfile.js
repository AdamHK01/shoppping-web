'use strict';
 
//引入gulp包,nodejs代码
var gulp = require('gulp');
//引入gulp-sass包
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

//创建一个gulp的任务
gulp.task('sass', function () {
  console.log('sass is running');
  return gulp.src('sass/**/*.scss') //让gulp去拿到原始目录
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError)) //把scss原始文件交给gulp-sass做编译转换
    .pipe(gulp.dest('css'));
});

//创建gulp监听任务: sass:watch
gulp.task('sass:watch', function () {
  console.log('watch is running')
  gulp.watch('sass/**/*.scss', ['sass']);
});
//gulp的默认任务
gulp.task('default',['sass:watch'],function(){
	console.log('default is running')
})