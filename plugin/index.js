'use strict';

const through = require('through2');
const PluginError = require('gulp-util').PluginError;

const pluginName = 'gulp-plugin';

module.exports = (opts = {}) => {

  return through.obj((file, enc, cb) => {

    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new PluginError(pluginName, 'Streams not supported!'));
    }

    if (file.isBuffer()) {
      return cb(new PluginError(pluginName, 'Buffers not supported!'));
    }

  });

};
