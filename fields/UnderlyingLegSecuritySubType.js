var invert = require('invert-obj');

function UnderlyingLegSecuritySubType (underlyingLegSecuritySubType) {
  this.message = underlyingLegSecuritySubType;
}

UnderlyingLegSecuritySubType.prototype.value = function () {
  return this.message;
};

UnderlyingLegSecuritySubType.Tag = '1338';

UnderlyingLegSecuritySubType.Type = 'STRING';

module.exports = UnderlyingLegSecuritySubType;