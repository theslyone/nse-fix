var invert = require('invert-obj');

function PegSecurityIDSource (pegSecurityIdsource) {
  this.message = pegSecurityIdsource;
}

PegSecurityIDSource.prototype.value = function () {
  return this.message;
};

PegSecurityIDSource.Tag = '1096';

PegSecurityIDSource.Type = 'STRING';

module.exports = PegSecurityIDSource;