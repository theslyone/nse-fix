var invert = require('invert-obj');

function EncodedLegIssuer (encodedLegIssuer) {
  this.message = encodedLegIssuer;
}

EncodedLegIssuer.prototype.value = function () {
  return this.message;
};

EncodedLegIssuer.Tag = '619';

EncodedLegIssuer.Type = 'DATA';

module.exports = EncodedLegIssuer;