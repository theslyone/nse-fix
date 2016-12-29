var invert = require('invert-obj');

function UnderlyingLegSecurityAltID (underlyingLegSecurityAltId) {
  this.message = underlyingLegSecurityAltId;
}

UnderlyingLegSecurityAltID.prototype.value = function () {
  return this.message;
};

UnderlyingLegSecurityAltID.Tag = '1335';

UnderlyingLegSecurityAltID.Type = 'STRING';

module.exports = UnderlyingLegSecurityAltID;