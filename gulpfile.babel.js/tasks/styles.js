import gulp from 'gulp';
import paths from '../paths';
import gulpLoadPlugin from 'gulp-load-plugins';
const $ = gulpLoadPlugin();

import autoprefixer from 'autoprefixer';
import atImport from 'postcss-easy-import';
import customProperties from 'postcss-custom-properties';
import mediaMinmax from 'postcss-media-minmax';
import customMedia from 'postcss-custom-media';
import colorFunction from 'postcss-color-function';

const processors = [
  atImport({glob: true}),
  customProperties(),
  mediaMinmax(),
  customMedia(),
  colorFunction(),
  autoprefixer({browsers: ['last 2 version']})
];

const styles = () => {
  return gulp.src(paths.styles.src)
    .pipe($.postcss(processors))
    .pipe(gulp.dest(paths.styles.dist));
}

export default styles;
