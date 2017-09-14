const ErrorLogger = require('../index');

describe('ErrorLogger', () => {
  test('should crete new options, not modify passed', () => {
    const options = {};
    const logger = new ErrorLogger(options);

    expect(options).not.toHaveProperty('full');
    expect(logger).toHaveProperty('options.full', false);
  });

  test('should set options', () => {
    const logger = new ErrorLogger({ full: true });
    expect(logger).toHaveProperty('options.full', true);
  });
});
