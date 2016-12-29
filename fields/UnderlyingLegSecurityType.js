var invert = require('invert-obj');

function UnderlyingLegSecurityType (underlyingLegSecurityType) {
  this.message = underlyingLegSecurityType;
}

UnderlyingLegSecurityType.prototype.value = function () {
  return this.message;
};

UnderlyingLegSecurityType.Tag = '1337';

UnderlyingLegSecurityType.Type = 'STRING';

module.exports = UnderlyingLegSecurityType;