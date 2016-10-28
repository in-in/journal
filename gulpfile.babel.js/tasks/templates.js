import gulp from 'gulp';
import paths from '../paths';
import gulpLoadPlugin from 'gulp-load-plugins';
const $ = gulpLoadPlugin();

import path from 'path';
import fs   from 'fs';

const data = {
	getData: getData('src/data')
};

function getData (pathToData) {
  return function (dataFile) {
    var resolvedPath = path.resolve(pathToData);
    var dataPath = resolvedPath + path.sep;
    var dataFilePath = path.resolve(path.join(dataPath, /\.json$/.test(dataFile) && dataFile || dataFile + '.json'));

    if (dataPath !== dataFilePath.slice(0, dataPath.length)) {
      throw new Error('Data path is not in data directory.');
    }

    return JSON.parse(fs.readFileSync(dataFilePath));
  }
};

const templates = () => {
  return gulp.src(paths.templates.src)
    .pipe($.pug({data}))
    .pipe(gulp.dest(paths.templates.dist));
}

export default templates
