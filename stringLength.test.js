const stringLength = require('./stringLength');

test('Counting characters in "Hello!"', () => {
  // Arrange
  const testString = 'Hello!';

  // Act
  const charCount = stringLength(testString);

  // Assert
  expect(charCount).toBe(6);
});
test('Empty string should throw error', () => {
  // Arrange
  const emptyString = '';

  // Act
  const charCount = () => stringLength(emptyString);

  // Assert
  expect(charCount).toThrow();
});
test('String with more than 10 characters should throw error', () => {
  // Arrange
  const longString = 'I am just a very, very long string with no purpose.';

  // Act
  const charCount = () => stringLength(longString);

  // Assert
  expect(charCount).toThrow();
});
