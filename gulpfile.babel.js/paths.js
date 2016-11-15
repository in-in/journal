const paths = {
  dist: 'dist/',
  src: 'src/',
  templates: {
    get src () { return `${paths.src}pages/*.pug`; },
    get dist () { return paths.dist; },
    get watch () { return [`${paths.src}**/*.pug`, `${paths.src}data/*.json`]; }
  },
  styles: {
    get src () { return `${paths.src}styles/style.css`; },
    get dist () { return `${paths.dist}assets/styles/`; },
    get watch () { return `${paths.src}**/*.css`; }
  },
  scripts: {
    get src () { return `${paths.src}scripts/main.js`; },
    get dist () { return `${paths.dist}assets/scripts/`; },
    get watch () { return [`${paths.src}**/*.js`, `!${paths.src}scripts/lib/*.js`]; },
    get lib () { return `${paths.src}scripts/lib/*.js`; }
  },
  images: {
    get src () { return `${paths.src}assets/images/*.*`; },
    get dist () { return `${paths.dist}assets/images/`; }
  }
}

export default paths
