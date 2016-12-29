var invert = require('invert-obj');

function AllocAccount (allocAccount) {
  this.message = allocAccount;
}

AllocAccount.prototype.value = function () {
  return this.message;
};

AllocAccount.Tag = '79';

AllocAccount.Type = 'STRING';

module.exports = AllocAccount;