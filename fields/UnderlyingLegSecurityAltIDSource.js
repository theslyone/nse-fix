var invert = require('invert-obj');

function UnderlyingLegSecurityAltIDSource (underlyingLegSecurityAltIdsource) {
  this.message = underlyingLegSecurityAltIdsource;
}

UnderlyingLegSecurityAltIDSource.prototype.value = function () {
  return this.message;
};

UnderlyingLegSecurityAltIDSource.Tag = '1336';

UnderlyingLegSecurityAltIDSource.Type = 'STRING';

module.exports = UnderlyingLegSecurityAltIDSource;