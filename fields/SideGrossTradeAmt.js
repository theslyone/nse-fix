var invert = require('invert-obj');

function SideGrossTradeAmt (sideGrossTradeAmt) {
  this.message = sideGrossTradeAmt;
}

SideGrossTradeAmt.prototype.value = function () {
  return this.message;
};

SideGrossTradeAmt.Tag = '1072';

SideGrossTradeAmt.Type = 'AMT';

module.exports = SideGrossTradeAmt;