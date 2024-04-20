const {encrypt} = require('./index');

describe('encrypt function', () => {
  test('should return the encrypted string', () => {
    const input = 'hello';
    const expectedOutput = '104101108108111';
    expect(encrypt(input)).toBe(expectedOutput);
  });

  test('should handle empty string', () => {
    const input = '';
    const expectedOutput = '';
    expect(encrypt(input)).toBe(expectedOutput);
  });

  test('should handle special characters', () => {
    const input = 'abc!@#';
    const expectedOutput = '097098099033064035';
    expect(encrypt(input)).toBe(expectedOutput);
  });
});
