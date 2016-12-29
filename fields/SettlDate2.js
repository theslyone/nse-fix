var invert = require('invert-obj');

function SettlDate2 (settlDate2) {
  this.message = settlDate2;
}

SettlDate2.prototype.value = function () {
  return this.message;
};

SettlDate2.Tag = '193';

SettlDate2.Type = 'LOCALMKTDATE';

module.exports = SettlDate2;