var invert = require('invert-obj');

function NoLegSecurityAltID (noLegSecurityAltId) {
  this.message = noLegSecurityAltId;
}

NoLegSecurityAltID.prototype.value = function () {
  return this.message;
};

NoLegSecurityAltID.Tag = '604';

NoLegSecurityAltID.Type = 'STRING';

module.exports = NoLegSecurityAltID;