var invert = require('invert-obj');

function GrossTradeAmt (grossTradeAmt) {
  this.message = grossTradeAmt;
}

GrossTradeAmt.prototype.value = function () {
  return this.message;
};

GrossTradeAmt.Tag = '381';

GrossTradeAmt.Type = 'AMT';

module.exports = GrossTradeAmt;