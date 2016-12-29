var invert = require('invert-obj');

function NoSecurityTypes (noSecurityTypes) {
  this.message = noSecurityTypes;
}

NoSecurityTypes.prototype.value = function () {
  return this.message;
};

NoSecurityTypes.Tag = '558';

NoSecurityTypes.Type = 'NUMINGROUP';

module.exports = NoSecurityTypes;