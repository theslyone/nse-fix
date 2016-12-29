var invert = require('invert-obj');

function LegAllocAccount (legAllocAccount) {
  this.message = legAllocAccount;
}

LegAllocAccount.prototype.value = function () {
  return this.message;
};

LegAllocAccount.Tag = '671';

LegAllocAccount.Type = 'STRING';

module.exports = LegAllocAccount;