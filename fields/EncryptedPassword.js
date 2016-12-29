var invert = require('invert-obj');

function EncryptedPassword (encryptedPassword) {
  this.message = encryptedPassword;
}

EncryptedPassword.prototype.value = function () {
  return this.message;
};

EncryptedPassword.Tag = '1402';

EncryptedPassword.Type = 'DATA';

module.exports = EncryptedPassword;