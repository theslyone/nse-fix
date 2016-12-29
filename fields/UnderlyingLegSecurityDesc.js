var invert = require('invert-obj');

function UnderlyingLegSecurityDesc (underlyingLegSecurityDesc) {
  this.message = underlyingLegSecurityDesc;
}

UnderlyingLegSecurityDesc.prototype.value = function () {
  return this.message;
};

UnderlyingLegSecurityDesc.Tag = '1392';

UnderlyingLegSecurityDesc.Type = 'STRING';

module.exports = UnderlyingLegSecurityDesc;