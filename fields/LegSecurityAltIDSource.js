var invert = require('invert-obj');

function LegSecurityAltIDSource (legSecurityAltIdsource) {
  this.message = legSecurityAltIdsource;
}

LegSecurityAltIDSource.prototype.value = function () {
  return this.message;
};

LegSecurityAltIDSource.Tag = '606';

LegSecurityAltIDSource.Type = 'STRING';

module.exports = LegSecurityAltIDSource;