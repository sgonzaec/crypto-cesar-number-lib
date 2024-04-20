/**
 * This function encrypts the given text into a string of numbers.
 * @param chain Text string to encrypt
 * @returns result
 */
const encrypt = (chain) => {
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
const decrypt = (chain) => {
  let result = "";
  for (let i = 0; i < chain.length; i += 3) {
    let segment = chain.substr(i, 3); 
    let charCode = parseInt(segment, 10); 
    result += String.fromCharCode(charCode);
  }
  return result;
};


module.exports = {
  encrypt,
  decrypt,
};
