var invert = require('invert-obj');

function UnderlyingLegSecurityIDSource (underlyingLegSecurityIdsource) {
  this.message = underlyingLegSecurityIdsource;
}

UnderlyingLegSecurityIDSource.prototype.value = function () {
  return this.message;
};

UnderlyingLegSecurityIDSource.Tag = '1333';

UnderlyingLegSecurityIDSource.Type = 'STRING';

module.exports = UnderlyingLegSecurityIDSource;