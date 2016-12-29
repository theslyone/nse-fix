var invert = require('invert-obj');

function SecureDataLen (secureDataLen) {
  this.message = secureDataLen;
}

SecureDataLen.prototype.value = function () {
  return this.message;
};

SecureDataLen.Tag = '90';

SecureDataLen.Type = 'LENGTH';

module.exports = SecureDataLen;