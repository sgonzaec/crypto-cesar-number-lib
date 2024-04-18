/**
 * This function encrypts the given text into a string of numbers.
 * @param chain Text string to encrypt
 * @returns result
 */
const encrypt = (chain: string) => {
  let result = "";
  for (let i = 0; i < chain.length; i++) {
    let charCode = chain.charCodeAt(i);
    result += charCode.toString().padStart(3, "0");
  }
  return result;
};

/**
 * This function decrypts the given string into a string
 * @param chain String of numbers to decrypt
 * @returns result
 */
const decrypt = (chain: string) => {
  let result = "";
  for (let i = 0; i < chain.length; i++) {
    let charCode = chain.charCodeAt(i);
    result += String.fromCharCode(charCode);
  }
  return result;
};

export default {
  encrypt,
  decrypt,
};
