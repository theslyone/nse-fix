var invert = require('invert-obj');

function UnderlyingLegSecurityID (underlyingLegSecurityId) {
  this.message = underlyingLegSecurityId;
}

UnderlyingLegSecurityID.prototype.value = function () {
  return this.message;
};

UnderlyingLegSecurityID.Tag = '1332';

UnderlyingLegSecurityID.Type = 'STRING';

module.exports = UnderlyingLegSecurityID;