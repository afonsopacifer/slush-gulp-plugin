# <%= appNameSlug %>

> <%= appDescription %>

[![Build Status](https://travis-ci.org/<%= appAuthor %>/<%= appNameSlug %>.svg?branch=master)](https://travis-ci.org/<%= appAuthor %>/<%= appNameSlug %>)
[![Coverage Status](https://coveralls.io/repos/github/<%= appAuthor %>/<%= appNameSlug %>/badge.svg?branch=master)](https://coveralls.io/github/<%= appAuthor %>/<%= appNameSlug %>?branch=master)
[![Dependency Status](https://david-dm.org/<%= appAuthor %>/<%= appNameSlug %>.svg)](https://david-dm.org/<%= appAuthor %>/<%= appNameSlug %>)
[![devDependency Status](https://david-dm.org/<%= appAuthor %>/<%= appNameSlug %>/dev-status.svg)](https://david-dm.org/<%= appAuthor %>/<%= appNameSlug %>#info=devDependencies)
[![npm](https://img.shields.io/npm/v/<%= appNameSlug %>.svg)](https://www.npmjs.com/package/<%= appNameSlug %>)
[![npm](https://img.shields.io/npm/dt/<%= appNameSlug %>.svg)](https://www.npmjs.com/package/<%= appNameSlug %>)

## Install

```
$ npm install <%= appNameSlug %> --save-dev
```

## Usage

```js
const gulp = require('gulp');
const banana = require('<%= appNameSlug %>');

gulp.task('<%= appNameSlug %>', () => {
  gulp.src(['src/**.bnn'])
    .pipe(<%= appNameSlug %>())
    .pipe(gulp.dest('dist'));
});
```

## Development

### Code Quality

*Validate the code style with [ESLint](http://eslint.org/):*
```sh
$ npm run eslint
```

### Tests

*Run the unit tests with [mocha](https://mochajs.org/):*
```sh
$ npm test
```

*Calculate the coverage with [Istanbul](https://gotwarlost.github.io/istanbul/):*
```sh
$ npm run cover
```

## Versioning
To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing
Find on our [issues](https://github.com/<%= appAuthor %>/<%= appNameSlug %>/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/<%= appAuthor %>/<%= appNameSlug %>/blob/master/CONTRIBUTING.md).

## History
See [Releases](https://github.com/<%= appAuthor %>/<%= appNameSlug %>/releases) for detailed changelog.

## License
[MIT License](https://github.com/<%= appAuthor %>/<%= appNameSlug %>/blob/master/LICENSE.md) © <%= appAuthor %>
