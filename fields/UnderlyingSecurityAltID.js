var invert = require('invert-obj');

function UnderlyingSecurityAltID (underlyingSecurityAltId) {
  this.message = underlyingSecurityAltId;
}

UnderlyingSecurityAltID.prototype.value = function () {
  return this.message;
};

UnderlyingSecurityAltID.Tag = '458';

UnderlyingSecurityAltID.Type = 'STRING';

module.exports = UnderlyingSecurityAltID;