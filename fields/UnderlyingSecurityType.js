var invert = require('invert-obj');

function UnderlyingSecurityType (underlyingSecurityType) {
  this.message = underlyingSecurityType;
}

UnderlyingSecurityType.prototype.value = function () {
  return this.message;
};

UnderlyingSecurityType.Tag = '310';

UnderlyingSecurityType.Type = 'STRING';

module.exports = UnderlyingSecurityType;