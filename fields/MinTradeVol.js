var invert = require('invert-obj');

function MinTradeVol (minTradeVol) {
  this.message = minTradeVol;
}

MinTradeVol.prototype.value = function () {
  return this.message;
};

MinTradeVol.Tag = '562';

MinTradeVol.Type = 'QTY';

module.exports = MinTradeVol;