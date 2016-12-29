var invert = require('invert-obj');

function EncodedSecurityDesc (encodedSecurityDesc) {
  this.message = encodedSecurityDesc;
}

EncodedSecurityDesc.prototype.value = function () {
  return this.message;
};

EncodedSecurityDesc.Tag = '351';

EncodedSecurityDesc.Type = 'DATA';

module.exports = EncodedSecurityDesc;