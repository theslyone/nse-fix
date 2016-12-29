var invert = require('invert-obj');

function PreTradeAnonymity (preTradeAnonymity) {
  this.message = preTradeAnonymity;
}

PreTradeAnonymity.prototype.value = function () {
  return this.message;
};

PreTradeAnonymity.Tag = '1091';

PreTradeAnonymity.Type = 'BOOLEAN';

module.exports = PreTradeAnonymity;