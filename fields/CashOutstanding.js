var invert = require('invert-obj');

function CashOutstanding (cashOutstanding) {
  this.message = cashOutstanding;
}

CashOutstanding.prototype.value = function () {
  return this.message;
};

CashOutstanding.Tag = '901';

CashOutstanding.Type = 'AMT';

module.exports = CashOutstanding;