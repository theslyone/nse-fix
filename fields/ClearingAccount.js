var invert = require('invert-obj');

function ClearingAccount (clearingAccount) {
  this.message = clearingAccount;
}

ClearingAccount.prototype.value = function () {
  return this.message;
};

ClearingAccount.Tag = '440';

ClearingAccount.Type = 'STRING';

module.exports = ClearingAccount;