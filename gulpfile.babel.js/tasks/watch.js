import gulp from 'gulp';
import paths from '../paths';
import templates from './templates';
import styles from './styles';
import stylelint from './stylelint';
import {scripts} from './scripts';
import images from './images';
import svgSprite from './svgSprite';

const watch = (done) => {
  gulp.watch(paths.templates.watch, templates);
  gulp.watch(paths.styles.watch, gulp.series(styles, stylelint));
  gulp.watch(paths.scripts.watch, scripts);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.svgSprite.src, svgSprite);
  done();
}

export default watch;
