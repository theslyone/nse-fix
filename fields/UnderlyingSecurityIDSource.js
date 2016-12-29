var invert = require('invert-obj');

function UnderlyingSecurityIDSource (underlyingSecurityIdsource) {
  this.message = underlyingSecurityIdsource;
}

UnderlyingSecurityIDSource.prototype.value = function () {
  return this.message;
};

UnderlyingSecurityIDSource.Tag = '305';

UnderlyingSecurityIDSource.Type = 'STRING';

module.exports = UnderlyingSecurityIDSource;