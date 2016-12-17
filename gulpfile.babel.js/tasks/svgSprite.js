import gulp from 'gulp';
import paths from '../paths';
import gulpLoadPlugin from 'gulp-load-plugins';
const $ = gulpLoadPlugin();

const config = {
  'shape': {
    'id': {
      'generator': 'icon-'
    },
    'dimension': {
      'attributes': true
    }
  },
  'transform': [
    {
      'svgo': {
        'plugins': [
          {
            'removeRasterImages': true
          }
        ]
      }
    }
  ],
  'mode': {
      'symbol': {
          'dest': '.',
          'sprite': 'svgSprite.pug',
          'inline': true
      }
  }
};

const svgSprite = () => {
  return gulp.src(paths.svgSprite.src)
    .pipe($.svgSprite(config))
    .pipe(gulp.dest(paths.svgSprite.dist));
}

export default svgSprite
