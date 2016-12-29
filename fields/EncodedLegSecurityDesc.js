var invert = require('invert-obj');

function EncodedLegSecurityDesc (encodedLegSecurityDesc) {
  this.message = encodedLegSecurityDesc;
}

EncodedLegSecurityDesc.prototype.value = function () {
  return this.message;
};

EncodedLegSecurityDesc.Tag = '622';

EncodedLegSecurityDesc.Type = 'DATA';

module.exports = EncodedLegSecurityDesc;