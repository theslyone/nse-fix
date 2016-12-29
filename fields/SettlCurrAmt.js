var invert = require('invert-obj');

function SettlCurrAmt (settlCurrAmt) {
  this.message = settlCurrAmt;
}

SettlCurrAmt.prototype.value = function () {
  return this.message;
};

SettlCurrAmt.Tag = '119';

SettlCurrAmt.Type = 'AMT';

module.exports = SettlCurrAmt;