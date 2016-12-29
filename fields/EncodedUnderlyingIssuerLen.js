var invert = require('invert-obj');

function EncodedUnderlyingIssuerLen (encodedUnderlyingIssuerLen) {
  this.message = encodedUnderlyingIssuerLen;
}

EncodedUnderlyingIssuerLen.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingIssuerLen.Tag = '362';

EncodedUnderlyingIssuerLen.Type = 'LENGTH';

module.exports = EncodedUnderlyingIssuerLen;