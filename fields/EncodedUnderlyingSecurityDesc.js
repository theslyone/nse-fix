var invert = require('invert-obj');

function EncodedUnderlyingSecurityDesc (encodedUnderlyingSecurityDesc) {
  this.message = encodedUnderlyingSecurityDesc;
}

EncodedUnderlyingSecurityDesc.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingSecurityDesc.Tag = '365';

EncodedUnderlyingSecurityDesc.Type = 'DATA';

module.exports = EncodedUnderlyingSecurityDesc;