'use strict';

const through = require('through2');
const PluginError = require('gulp-util').PluginError;

const pluginName = 'gulp-plugin';

module.exports = () => {

  return through.obj((file, enc, cb) => {

    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new PluginError(pluginName, 'Streams not supported!'));
    }

    if (file.isBuffer()) {

      const newContent = file.contents.toString();
      file.contents = new Buffer(newContent);

      cb(null, file);
    }

  });

};
