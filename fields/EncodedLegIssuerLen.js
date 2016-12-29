var invert = require('invert-obj');

function EncodedLegIssuerLen (encodedLegIssuerLen) {
  this.message = encodedLegIssuerLen;
}

EncodedLegIssuerLen.prototype.value = function () {
  return this.message;
};

EncodedLegIssuerLen.Tag = '618';

EncodedLegIssuerLen.Type = 'LENGTH';

module.exports = EncodedLegIssuerLen;