import gulp from 'gulp';
import paths from '../paths';
import clean from './clean';
import templates from './templates';
import images from './images';
import svgSprite from './svgSprite';
import styles from './styles';
import { scripts, lib } from './scripts';
import server from './server';
import watch from './watch';

const copy = () => {
  return gulp.src(paths.assets.src)
    .pipe(gulp.dest(paths.assets.dist));
};

gulp.task('build',
  gulp.series(
    clean,
    gulp.parallel(images, svgSprite, copy),
    gulp.parallel(templates, styles, scripts, lib)
  )
);

gulp.task('default',
  gulp.series(
    'build',
    gulp.parallel(server, watch)
  )
);
