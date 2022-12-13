const reverseString = require('./reverseString');

test('Reverse a string', () => {
  // Arrange
  const str = 'Hello Jest!';

  // Act
  const reverseStr = reverseString(str);

  // Assert
  expect(reverseStr).toBe('!tseJ olleH');
});
