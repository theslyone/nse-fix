var invert = require('invert-obj');

function EncryptedPasswordLen (encryptedPasswordLen) {
  this.message = encryptedPasswordLen;
}

EncryptedPasswordLen.prototype.value = function () {
  return this.message;
};

EncryptedPasswordLen.Tag = '1401';

EncryptedPasswordLen.Type = 'LENGTH';

module.exports = EncryptedPasswordLen;