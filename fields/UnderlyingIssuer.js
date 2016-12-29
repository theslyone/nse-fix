var invert = require('invert-obj');

function UnderlyingIssuer (underlyingIssuer) {
  this.message = underlyingIssuer;
}

UnderlyingIssuer.prototype.value = function () {
  return this.message;
};

UnderlyingIssuer.Tag = '306';

UnderlyingIssuer.Type = 'STRING';

module.exports = UnderlyingIssuer;