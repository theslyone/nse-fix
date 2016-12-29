var invert = require('invert-obj');

function EncryptedNewPassword (encryptedNewPassword) {
  this.message = encryptedNewPassword;
}

EncryptedNewPassword.prototype.value = function () {
  return this.message;
};

EncryptedNewPassword.Tag = '1404';

EncryptedNewPassword.Type = 'DATA';

module.exports = EncryptedNewPassword;