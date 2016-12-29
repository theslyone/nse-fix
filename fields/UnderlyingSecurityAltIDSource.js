var invert = require('invert-obj');

function UnderlyingSecurityAltIDSource (underlyingSecurityAltIdsource) {
  this.message = underlyingSecurityAltIdsource;
}

UnderlyingSecurityAltIDSource.prototype.value = function () {
  return this.message;
};

UnderlyingSecurityAltIDSource.Tag = '459';

UnderlyingSecurityAltIDSource.Type = 'STRING';

module.exports = UnderlyingSecurityAltIDSource;