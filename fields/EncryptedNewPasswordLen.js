var invert = require('invert-obj');

function EncryptedNewPasswordLen (encryptedNewPasswordLen) {
  this.message = encryptedNewPasswordLen;
}

EncryptedNewPasswordLen.prototype.value = function () {
  return this.message;
};

EncryptedNewPasswordLen.Tag = '1403';

EncryptedNewPasswordLen.Type = 'LENGTH';

module.exports = EncryptedNewPasswordLen;