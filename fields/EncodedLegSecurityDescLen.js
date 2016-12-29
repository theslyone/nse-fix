var invert = require('invert-obj');

function EncodedLegSecurityDescLen (encodedLegSecurityDescLen) {
  this.message = encodedLegSecurityDescLen;
}

EncodedLegSecurityDescLen.prototype.value = function () {
  return this.message;
};

EncodedLegSecurityDescLen.Tag = '621';

EncodedLegSecurityDescLen.Type = 'LENGTH';

module.exports = EncodedLegSecurityDescLen;