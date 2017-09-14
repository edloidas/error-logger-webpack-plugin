const webpackError = {
  name: 'EntryModuleNotFoundError',
  message: `Entry module not found: Error: Can't resolve 'sample-loader' in 'path/to/file'`,
  details: `Can't resolve 'sample-loader' in 'path/to/file \n./path/to/node_modules/sample-loader doesn't exist'`,
  error: {
    details: `Can't resolve 'sample-loader' in 'path/to/file \n./path/to/node_modules/sample-loader doesn't exist'`,
    missing: ['./path/to/node_modules', './path/to/node_modules/sample-loader']
  },
  dependencies: [
    {
      module: null,
      request: './src/path/to/caller.js',
      userRequest: './src/path/to/caller.js',
      loc: 'main'
    }
  ]
};

const compilerError = {
  rawMessage: "error number: '=' expected.",
  message: "error number: '=' expected.",
  loaderSource: 'sample-loader',
  location: { line: 5, character: 21 },
  file: undefined,
  module: {
    request: '',
    userRequest: 'absolute/path/to/file.js',
    rawRequest: './relative/path/to/file',
    parser: {
      _plugins: [{}]
    },
    resource: 'absolute/path/to/file.js',
    loaders: [[{}]],
    fileDependencies: [],
    contextDependencies: [],
    error: null,
    _source: {},
    assets: {},
    built: true,
    _cachedSource: { source: [{}], hash: '4e4eaf97b0cc6406b4edadc66642572c' },
    issuer: {},
    optional: false,
    useSourceMap: true,
    cacheable: true
  }
};

const fileError = {
  rawMessage: "error number: '=' expected.",
  message: "error number: '=' expected.",
  loaderSource: 'sample-loader',
  location: { line: 5, character: 21 },
  file: 'absolute/path/to/file.js'
};

module.exports = {
  webpackError,
  compilerError,
  fileError
};
