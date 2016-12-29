var invert = require('invert-obj');

function AllocSettlCurrAmt (allocSettlCurrAmt) {
  this.message = allocSettlCurrAmt;
}

AllocSettlCurrAmt.prototype.value = function () {
  return this.message;
};

AllocSettlCurrAmt.Tag = '737';

AllocSettlCurrAmt.Type = 'AMT';

module.exports = AllocSettlCurrAmt;