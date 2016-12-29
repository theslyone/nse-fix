var invert = require('invert-obj');

function SettlInstCode (settlInstCode) {
  this.message = settlInstCode;
}

SettlInstCode.prototype.value = function () {
  return this.message;
};

SettlInstCode.Tag = '175';

SettlInstCode.Type = 'STRING';

module.exports = SettlInstCode;