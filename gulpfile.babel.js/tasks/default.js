import gulp from 'gulp';
import clean from './clean';
import templates from './templates';
import images from './images';
import styles from './styles';
import { scripts, lib } from './scripts';
import server from './server';
import watch from './watch';

gulp.task('default',
  gulp.series(
    clean,
    gulp.parallel(templates, images, styles, scripts, lib),
    gulp.parallel(server, watch)
  )
);
