var invert = require('invert-obj');

function EncodedIssuer (encodedIssuer) {
  this.message = encodedIssuer;
}

EncodedIssuer.prototype.value = function () {
  return this.message;
};

EncodedIssuer.Tag = '349';

EncodedIssuer.Type = 'DATA';

module.exports = EncodedIssuer;