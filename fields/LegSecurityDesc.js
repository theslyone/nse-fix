var invert = require('invert-obj');

function LegSecurityDesc (legSecurityDesc) {
  this.message = legSecurityDesc;
}

LegSecurityDesc.prototype.value = function () {
  return this.message;
};

LegSecurityDesc.Tag = '620';

LegSecurityDesc.Type = 'STRING';

module.exports = LegSecurityDesc;