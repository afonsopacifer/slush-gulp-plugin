const assert = require('assert');
const File = require('vinyl');
const banana = require('../');

describe('', () => {

  it('', (done) => {

    const fakeFile = new File({
      contents:  new Buffer('text content'),
    });

    const stream = pluginName();

    stream.write(fakeFile);

    stream.on('data', (file) => {

      assert(file.isBuffer());

      const result = file.contents.toString();
      const expect = 'text content';

      assert.equal(result, expect);

      done();

    });

  });

});
