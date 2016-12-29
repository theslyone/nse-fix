var invert = require('invert-obj');

function EncodedUnderlyingIssuer (encodedUnderlyingIssuer) {
  this.message = encodedUnderlyingIssuer;
}

EncodedUnderlyingIssuer.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingIssuer.Tag = '363';

EncodedUnderlyingIssuer.Type = 'DATA';

module.exports = EncodedUnderlyingIssuer;