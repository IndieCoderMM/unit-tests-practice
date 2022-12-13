const capitalize = require('./capitalizeString');

describe('Captilization', () => {
  test('The first character should be in uppercase', () => {
    // Arrange
    const lowercaseStr = 'all are in lowercase';

    // Act
    const result = capitalize(lowercaseStr);

    // Assert
    expect(result).toBe('All are in lowercase');
  });
});
