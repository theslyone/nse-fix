var invert = require('invert-obj');

function SignatureLength (signatureLength) {
  this.message = signatureLength;
}

SignatureLength.prototype.value = function () {
  return this.message;
};

SignatureLength.Tag = '93';

SignatureLength.Type = 'LENGTH';

module.exports = SignatureLength;