var invert = require('invert-obj');

function LegSecurityType (legSecurityType) {
  this.message = legSecurityType;
}

LegSecurityType.prototype.value = function () {
  return this.message;
};

LegSecurityType.Tag = '609';

LegSecurityType.Type = 'STRING';

module.exports = LegSecurityType;