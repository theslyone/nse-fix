var invert = require('invert-obj');

function OrigTradeDate (origTradeDate) {
  this.message = origTradeDate;
}

OrigTradeDate.prototype.value = function () {
  return this.message;
};

OrigTradeDate.Tag = '1125';

OrigTradeDate.Type = 'LOCALMKTDATE';

module.exports = OrigTradeDate;