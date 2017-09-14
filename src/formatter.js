const path = require('path');

const formatPath = file => (file ? path.normalize(file) : '');
const formatLocation = location => {
  const valid = location && location.line && location.character;
  return valid ? `[${location.line}, ${location.character}]` : '';
};

const isWebpackError = err => !!(err.name && err.message && err.details);
const isCompilerError = err =>
  !!(err.rawMessage && err.location && err.module && err.module.resource);
const isFileError = err => !!(err.rawMessage && err.location && err.file);

const formatError = (error, showStacktrace = false) => {
  if (showStacktrace) {
    return error;
  }
  if (isCompilerError(error) || isFileError(error)) {
    const { file, location, rawMessage } = error;
    const filePath = (error.module && error.module.resource) || file;
    return `${formatPath(filePath)}${formatLocation(location)}: ${rawMessage}`;
  } else if (isWebpackError(error)) {
    return `${error.name}: ${error.message}`;
  }

  return error;
};

module.exports = {
  isWebpackError,
  isCompilerError,
  isFileError,
  formatPath,
  formatLocation,
  formatError
};
