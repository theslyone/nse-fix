var invert = require('invert-obj');

function UnderlyingSecurityDesc (underlyingSecurityDesc) {
  this.message = underlyingSecurityDesc;
}

UnderlyingSecurityDesc.prototype.value = function () {
  return this.message;
};

UnderlyingSecurityDesc.Tag = '307';

UnderlyingSecurityDesc.Type = 'STRING';

module.exports = UnderlyingSecurityDesc;