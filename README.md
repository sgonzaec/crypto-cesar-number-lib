
# Numeric Caesar encrypt (RE-NEWED)

This library enhances text manipulation by implementing Caesar encryption, enabling the transformation of textual information into a purely numeric representation.

![Cesar](https://www.ugr.es/~anillos/textos/pdf/2010/EXPO-1.Criptografia/Img/img21.gif)

## How to use

### Install

```bash
npm install crypto-cesar-number-lib
```

### Encrypt

The `encrypt` function takes a string as input and returns an encrypted value. Here's an example of how to use it:

```javascript
const { encrypt } = require('./crypto-cesar-number-lib');

const originalText = "Hello, world!";

const encryptedText = encrypt(originalText);
console.log("Encrypted text:", encryptedText); 
//result: 072101108108111044032119111114108100033
```

### Decrypt

The `decrypt` function takes a string as input and returns an encrypted value. Here's an example of how to use it:

```javascript
const { decrypt } = require('./crypto-cesar-number-lib');

const cryptoChain = "072101108108111044032119111114108100033";

const decryptedText = decrypt(cryptoChain);
console.log("Decrypted text:", decryptedText); 
//result: 'Hello, world!'
```

## Licencia

Este proyecto está licenciado bajo [Licencia MIT](https://opensource.org/licenses/MIT) - consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
