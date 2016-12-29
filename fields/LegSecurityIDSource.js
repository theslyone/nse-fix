var invert = require('invert-obj');

function LegSecurityIDSource (legSecurityIdsource) {
  this.message = legSecurityIdsource;
}

LegSecurityIDSource.prototype.value = function () {
  return this.message;
};

LegSecurityIDSource.Tag = '603';

LegSecurityIDSource.Type = 'STRING';

module.exports = LegSecurityIDSource;