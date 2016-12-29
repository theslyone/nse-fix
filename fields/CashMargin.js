var invert = require('invert-obj');

function CashMargin (cashMargin) {
  this.message = cashMargin;
}

CashMargin.prototype.value = function () {
  return this.message;
};


CashMargin.Keys = {
  'CASH': '1',
  'MARGIN_OPEN': '2',
  'MARGIN_CLOSE': '3',
};

CashMargin.Tag = '544';

CashMargin.Type = 'CHAR';

CashMargin.Values = invert(CashMargin.Keys);

module.exports = CashMargin;