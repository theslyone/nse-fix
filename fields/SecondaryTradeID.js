var invert = require('invert-obj');

function SecondaryTradeID (secondaryTradeId) {
  this.message = secondaryTradeId;
}

SecondaryTradeID.prototype.value = function () {
  return this.message;
};

SecondaryTradeID.Tag = '1040';

SecondaryTradeID.Type = 'STRING';

module.exports = SecondaryTradeID;