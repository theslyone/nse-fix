var invert = require('invert-obj');

function LegGrossTradeAmt (legGrossTradeAmt) {
  this.message = legGrossTradeAmt;
}

LegGrossTradeAmt.prototype.value = function () {
  return this.message;
};

LegGrossTradeAmt.Tag = '1075';

LegGrossTradeAmt.Type = 'AMT';

module.exports = LegGrossTradeAmt;