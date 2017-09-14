const { webpackError, compilerError, fileError } = require('./errors');
const {
  isWebpackError,
  isCompilerError,
  isFileError,
  formatPath,
  formatLocation,
  formatError
} = require('../src/formatter');

describe('Formatter', () => {
  test('should determine webpack errors', () => {
    expect(isWebpackError(webpackError)).toBeTruthy();
    expect(isWebpackError(compilerError)).toBeFalsy();
    expect(isWebpackError(fileError)).toBeFalsy();
    expect(isWebpackError(new Error('message'))).toBeFalsy();
  });

  test('should determine compiler errors', () => {
    expect(isCompilerError(compilerError)).toBeTruthy();
    expect(isCompilerError(webpackError)).toBeFalsy();
    expect(isCompilerError(fileError)).toBeFalsy();
    expect(isCompilerError(new Error('message'))).toBeFalsy();
  });

  test('should determine file errors', () => {
    expect(isFileError(fileError)).toBeTruthy();
    expect(isFileError(webpackError)).toBeFalsy();
    expect(isFileError(compilerError)).toBeFalsy();
    expect(isFileError(new Error('message'))).toBeFalsy();
  });

  test('should return valid message when formating', () => {
    const error = new Error('message');
    expect(formatError(error)).toEqual(error);
    expect(formatError(compilerError, true)).toEqual(compilerError);

    let matching = expect.stringMatching(/.+:\s.+/);
    expect(formatError(webpackError)).toEqual(matching);
    matching = expect.stringMatching(/.+\[\d+,\s\d+\]:\s.+/);
    expect(formatError(compilerError)).toEqual(matching);
    matching = expect.stringMatching(/.+\[\d+,\s\d+\]:\s.+/);
    expect(formatError(fileError)).toEqual(matching);
  });

  test('should format location', () => {
    expect(formatLocation({ line: 5, character: 21 })).toEqual(`[5, 21]`);
    expect(formatLocation({ line: 5 })).toEqual('');
    expect(formatLocation({ character: 21 })).toEqual('');
    expect(formatLocation()).toEqual('');
  });

  test('should format path', () => {
    expect(formatPath('./path/to/file.js').endsWith('file.js')).toBeTruthy();
    expect(formatPath('')).toEqual('');
    expect(formatPath()).toEqual('');
  });
});
