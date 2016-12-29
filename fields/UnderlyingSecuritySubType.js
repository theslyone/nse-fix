var invert = require('invert-obj');

function UnderlyingSecuritySubType (underlyingSecuritySubType) {
  this.message = underlyingSecuritySubType;
}

UnderlyingSecuritySubType.prototype.value = function () {
  return this.message;
};

UnderlyingSecuritySubType.Tag = '763';

UnderlyingSecuritySubType.Type = 'STRING';

module.exports = UnderlyingSecuritySubType;