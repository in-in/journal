import gulp from 'gulp';
import paths from '../paths';
import templates from './templates';
import styles from './styles';
import stylelint from './stylelint';
import scripts from './scripts';
import images from './images';

const watch = () => {
  gulp.watch(paths.templates.watch, templates);
  gulp.watch(paths.styles.watch, gulp.series(styles, stylelint));
  gulp.watch(paths.scripts.watch, scripts);
  gulp.watch(paths.images.src, images);
}

export default watch;
