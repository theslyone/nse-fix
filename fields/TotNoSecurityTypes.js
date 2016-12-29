var invert = require('invert-obj');

function TotNoSecurityTypes (totNoSecurityTypes) {
  this.message = totNoSecurityTypes;
}

TotNoSecurityTypes.prototype.value = function () {
  return this.message;
};

TotNoSecurityTypes.Tag = '557';

TotNoSecurityTypes.Type = 'INT';

module.exports = TotNoSecurityTypes;