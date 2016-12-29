var invert = require('invert-obj');

function Issuer (issuer) {
  this.message = issuer;
}

Issuer.prototype.value = function () {
  return this.message;
};

Issuer.Tag = '106';

Issuer.Type = 'STRING';

module.exports = Issuer;