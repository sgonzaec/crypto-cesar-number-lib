const { decrypt } = require('./index');

describe('decrypt function', () => {
  test('should return the decrypted string', () => {
    const input = '104101108108111';
    const expectedOutput = 'hello';
    expect(decrypt(input)).toBe(expectedOutput);
  });

  test('should handle empty string', () => {
    const input = '';
    const expectedOutput = '';
    expect(decrypt(input)).toBe(expectedOutput);
  });

  test('should handle special characters', () => {
    const input = '097098099033064035';
    const expectedOutput = 'abc!@#';
    expect(decrypt(input)).toBe(expectedOutput);
  });
});
