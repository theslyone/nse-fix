var invert = require('invert-obj');

function SettlDepositoryCode (settlDepositoryCode) {
  this.message = settlDepositoryCode;
}

SettlDepositoryCode.prototype.value = function () {
  return this.message;
};

SettlDepositoryCode.Tag = '173';

SettlDepositoryCode.Type = 'STRING';

module.exports = SettlDepositoryCode;