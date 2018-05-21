const path = require('path');
const rewireLodash = require('react-app-rewire-lodash');
const rewireEslint = require('react-app-rewire-eslint');
const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
  // Allows us to have a .eslintrc file
  config = rewireEslint(config, env);
  // Setup css modules
  config = rewireCssModules(config, env);
  // Adds a global alias to avoid uggly paths e.g: '../../../components'
  config.resolve = {
    alias: {
      src: path.resolve(__dirname, 'src/')
    }
  };

  // Also rewire with lodash babel plugin to reduce bundle size
  return rewireLodash(config, env);
};
