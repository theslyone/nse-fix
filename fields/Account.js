var invert = require('invert-obj');

function Account (account) {
  this.message = account;
}

Account.prototype.value = function () {
  return this.message;
};

Account.Tag = '1';

Account.Type = 'STRING';

module.exports = Account;