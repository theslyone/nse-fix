var invert = require('invert-obj');

function SecurityAltIDSource (securityAltIdsource) {
  this.message = securityAltIdsource;
}

SecurityAltIDSource.prototype.value = function () {
  return this.message;
};

SecurityAltIDSource.Tag = '456';

SecurityAltIDSource.Type = 'STRING';

module.exports = SecurityAltIDSource;