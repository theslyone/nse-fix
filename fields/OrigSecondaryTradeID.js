var invert = require('invert-obj');

function OrigSecondaryTradeID (origSecondaryTradeId) {
  this.message = origSecondaryTradeId;
}

OrigSecondaryTradeID.prototype.value = function () {
  return this.message;
};

OrigSecondaryTradeID.Tag = '1127';

OrigSecondaryTradeID.Type = 'STRING';

module.exports = OrigSecondaryTradeID;