var invert = require('invert-obj');

function EncryptedPasswordMethod (encryptedPasswordMethod) {
  this.message = encryptedPasswordMethod;
}

EncryptedPasswordMethod.prototype.value = function () {
  return this.message;
};

EncryptedPasswordMethod.Tag = '1400';

EncryptedPasswordMethod.Type = 'INT';

module.exports = EncryptedPasswordMethod;