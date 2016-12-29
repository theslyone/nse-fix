var invert = require('invert-obj');

function EncodedSecurityDescLen (encodedSecurityDescLen) {
  this.message = encodedSecurityDescLen;
}

EncodedSecurityDescLen.prototype.value = function () {
  return this.message;
};

EncodedSecurityDescLen.Tag = '350';

EncodedSecurityDescLen.Type = 'LENGTH';

module.exports = EncodedSecurityDescLen;