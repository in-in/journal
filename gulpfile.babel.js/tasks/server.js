import gulp from 'gulp';
import paths from '../paths';
import {create as bsCreate} from 'browser-sync';
const browserSync = bsCreate();

const server = (done) => {
  return browserSync.init({
    server: {baseDir: paths.dist},
    ui: false,
    files: paths.dist,
    port: 3000,
    open: false,
    reloadOnRestart: true,
    notify: false
  }, done);
}

export default server;
