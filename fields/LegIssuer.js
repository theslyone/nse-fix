var invert = require('invert-obj');

function LegIssuer (legIssuer) {
  this.message = legIssuer;
}

LegIssuer.prototype.value = function () {
  return this.message;
};

LegIssuer.Tag = '617';

LegIssuer.Type = 'STRING';

module.exports = LegIssuer;