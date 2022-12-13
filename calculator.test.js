const Calculator = require('./calculator');

describe.each([
  [1, 1, 2],
  [2, 8, 10],
  [100, 10, 110],
])('Adding Two Numbers', (a, b, expected) => {
  test(`${a} + ${b} should equal to ${expected}`, () => {
    // Arrange
    const myCalc = new Calculator();

    // Act
    const result = myCalc.add(a, b);

    // Assert
    expect(result).toBe(expected);
  });
});

describe.each([
  [1, 1, 0],
  [2, 8, -6],
  [100, 10, 90],
])('Subtracting Two Numbers', (a, b, expected) => {
  test(`${a} - ${b} should equal to ${expected}`, () => {
    // Arrange
    const myCalc = new Calculator();

    // Act
    const result = myCalc.subtract(a, b);

    // Assert
    expect(result).toBe(expected);
  });
});

describe.each([
  [1, 1, 1],
  [2, 8, 16],
  [100, 10, 1000],
])('Multiplying Two Numbers', (a, b, expected) => {
  test(`${a} * ${b} should equal to ${expected}`, () => {
    // Arrange
    const myCalc = new Calculator();

    // Act
    const result = myCalc.multiply(a, b);

    // Assert
    expect(result).toBe(expected);
  });
});

describe.each([
  [1, 1, 1],
  [8, 2, 4],
  [100, 10, 10],
])('Dividing Two Numbers', (a, b, expected) => {
  test(`dividing ${a} by ${b} should equal to ${expected}`, () => {
    // Arrange
    const myCalc = new Calculator();

    // Act
    const result = myCalc.divide(a, b);

    // Assert
    expect(result).toBe(expected);
  });
});
