var invert = require('invert-obj');

function SettlBrkrCode (settlBrkrCode) {
  this.message = settlBrkrCode;
}

SettlBrkrCode.prototype.value = function () {
  return this.message;
};

SettlBrkrCode.Tag = '174';

SettlBrkrCode.Type = 'STRING';

module.exports = SettlBrkrCode;