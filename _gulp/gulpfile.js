// 1.モジュール読み込み
//----------------------------------------------------------------------
// gulpの読み込み
const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');

// sassの読み込み
const gulpDartSass = require('gulp-dart-sass');

// 2.タスク定義
//----------------------------------------------------------------------
const sass = () => {
  return gulp
    .src('../_src/Layout/*.scss')
    .pipe(gulpDartSass())
    .pipe(gulp.dest('../dist/css'))
}

// 3.実行
//----------------------------------------------------------------------
exports.sass = sass