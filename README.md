<h1 align="center">error-logger-webpack-plugin</h1>

## :no_entry_sign: :arrow_heading_up: This repository is moved to [enonic-npm](https://github.com/enonic/enonic-npm/tree/master/packages/error-logger-webpack-plugin) ##

[![Travis Build Status][travis-image]][travis-url]
[![AppVeyor Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url]

Log webpack errors in readable format, suitable for navigation.

## Usage ##

##### webpack.config.js #####
```js
const ErrorLoggerPlugin = require('error-logger-webpack-plugin');
// ...

const config = {
  // ...
  plugins: [
    new ErrorLoggerPlugin({verbose: false})
  ]
};

module.exports = config;
```

See the official webpack [documentation](https://webpack.js.org/concepts/plugins/#usage) for a deeper explanation of plugin usage.

## Configuration ##

You can pass a hash of configuration options to `ErrorLoggerPlugin`, such as:
* `verbose`: `true | false` If `false` (default) try to minimize the error message.

## License ##

[MIT](LICENSE) © [Mikita Taukachou](https://edloidas.com)

[travis-url]: https://travis-ci.org/edloidas/error-logger-webpack-plugin
[travis-image]: https://img.shields.io/travis/edloidas/error-logger-webpack-plugin.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMTQyLjUgLTE0Mi41IDI4NSAyODUiPjxjaXJjbGUgcj0iMTQxLjciIGZpbGw9IiNERDQ4MTQiLz48ZyBpZD0iYSIgZmlsbD0iI0ZGRiI%2BPGNpcmNsZSBjeD0iLTk2LjQiIHI9IjE4LjkiLz48cGF0aCBkPSJNLTQ1LjYgNjguNGMtMTYuNi0xMS0yOS0yOC0zNC00Ny44IDYtNSA5LjgtMTIuMyA5LjgtMjAuNnMtMy44LTE1LjctOS44LTIwLjZjNS0xOS44IDE3LjQtMzYuNyAzNC00Ny44bDEzLjggMjMuMkMtNDYtMzUuMi01NS4zLTE4LjctNTUuMyAwYzAgMTguNyA5LjMgMzUuMiAyMy41IDQ1LjJ6Ii8%2BPC9nPjx1c2UgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0icm90YXRlKDEyMCkiLz48dXNlIHhsaW5rOmhyZWY9IiNhIiB0cmFuc2Zvcm09InJvdGF0ZSgyNDApIi8%2BPC9zdmc%2B "Linux build"

[appveyor-url]: https://ci.appveyor.com/project/edloidas/error-logger-webpack-plugin
[appveyor-image]: https://img.shields.io/appveyor/ci/edloidas/error-logger-webpack-plugin.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48ZyBmaWxsPSIjMUJBMUUyIiB0cmFuc2Zvcm09InNjYWxlKDgpIj48cGF0aCBkPSJNMCAyLjI2NWw2LjUzOS0uODg4LjAwMyA2LjI4OC02LjUzNi4wMzd6Ii8%2BPHBhdGggZD0iTTYuNTM2IDguMzlsLjAwNSA2LjI5My02LjUzNi0uODk2di01LjQ0eiIvPjxwYXRoIGQ9Ik03LjMyOCAxLjI2MWw4LjY3LTEuMjYxdjcuNTg1bC04LjY3LjA2OXoiLz48cGF0aCBkPSJNMTYgOC40NDlsLS4wMDIgNy41NTEtOC42Ny0xLjIyLS4wMTItNi4zNDV6Ii8%2BPC9nPjwvc3ZnPg== "Windows build"

[coveralls-url]: https://coveralls.io/github/edloidas/error-logger-webpack-plugin?branch=master
[coveralls-image]: https://coveralls.io/repos/github/edloidas/error-logger-webpack-plugin/badge.svg?branch=master

[dep-url]: https://david-dm.org/edloidas/error-logger-webpack-plugin
[dep-image]: https://david-dm.org/edloidas/error-logger-webpack-plugin.svg

[devdep-url]: https://david-dm.org/edloidas/error-logger-webpack-plugin#info=devDependencies
[devdep-image]: https://david-dm.org/edloidas/error-logger-webpack-plugin/dev-status.svg
