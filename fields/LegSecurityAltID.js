var invert = require('invert-obj');

function LegSecurityAltID (legSecurityAltId) {
  this.message = legSecurityAltId;
}

LegSecurityAltID.prototype.value = function () {
  return this.message;
};

LegSecurityAltID.Tag = '605';

LegSecurityAltID.Type = 'STRING';

module.exports = LegSecurityAltID;