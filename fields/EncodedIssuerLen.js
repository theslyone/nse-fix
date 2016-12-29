var invert = require('invert-obj');

function EncodedIssuerLen (encodedIssuerLen) {
  this.message = encodedIssuerLen;
}

EncodedIssuerLen.prototype.value = function () {
  return this.message;
};

EncodedIssuerLen.Tag = '348';

EncodedIssuerLen.Type = 'LENGTH';

module.exports = EncodedIssuerLen;