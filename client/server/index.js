const md5File = require('md5-file');
const path = require('path');

const ignoreStyles = require('ignore-styles');
const register = ignoreStyles.default;

// When running on the server,  to load via their hashed version in the build folder
const extensions = [ '.gif', '.jpeg', '.jpg', '.png', '.svg' ];

// Override the default style ignorer, also modifying all image requests
register(ignoreStyles.DEFAULT_EXTENSIONS, (mod, filename) => {
  if (!extensions.find(f => filename.endsWith(f))) {
    // If we find a style
    return ignoreStyles.noOp();
  }
  else {
    // If we find an image
    const hash = md5File.sync(filename).slice(0, 8);
    const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`);

    mod.exports = `/static/media/${bn}`;
  }
});

// The first two allow us to use import rather than require, the third is for code splitting
// Polyfill includes a custom regenerator runtime and core-js
require('@babel/polyfill');
require('@babel/register')({
  ignore: [ /\/(build|node_modules)\// ],
  presets: [ '@babel/preset-env', '@babel/preset-react' ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'dynamic-import-node',
    'react-loadable/babel',
  ],
});

require('./server');
