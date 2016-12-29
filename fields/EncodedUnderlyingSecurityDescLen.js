var invert = require('invert-obj');

function EncodedUnderlyingSecurityDescLen (encodedUnderlyingSecurityDescLen) {
  this.message = encodedUnderlyingSecurityDescLen;
}

EncodedUnderlyingSecurityDescLen.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingSecurityDescLen.Tag = '364';

EncodedUnderlyingSecurityDescLen.Type = 'LENGTH';

module.exports = EncodedUnderlyingSecurityDescLen;