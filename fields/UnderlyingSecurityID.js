var invert = require('invert-obj');

function UnderlyingSecurityID (underlyingSecurityId) {
  this.message = underlyingSecurityId;
}

UnderlyingSecurityID.prototype.value = function () {
  return this.message;
};

UnderlyingSecurityID.Tag = '309';

UnderlyingSecurityID.Type = 'STRING';

module.exports = UnderlyingSecurityID;