var invert = require('invert-obj');

function PegSecurityDesc (pegSecurityDesc) {
  this.message = pegSecurityDesc;
}

PegSecurityDesc.prototype.value = function () {
  return this.message;
};

PegSecurityDesc.Tag = '1099';

PegSecurityDesc.Type = 'STRING';

module.exports = PegSecurityDesc;