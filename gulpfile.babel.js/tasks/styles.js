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
import eachLoop from 'postcss-each';
import mqpacker from 'css-mqpacker';
import csso from 'postcss-csso';
import ancestors from 'postcss-nested-ancestors';
import nesting from 'postcss-nesting';

const processors = [
  atImport({glob: true}),
  ancestors(),
  nesting({
    bubble: ['each']
  }),
  eachLoop(),
  customProperties(),
  mediaMinmax(),
  customMedia(),
  colorFunction(),
  autoprefixer({browsers: ['last 2 version']}),
  mqpacker({
    sort: true
  }),
  csso()
];

const styles = () => {
  return gulp.src(paths.styles.src)
    .pipe($.postcss(processors))
    .pipe(gulp.dest(paths.styles.dist));
}

export default styles;
