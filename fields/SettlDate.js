var invert = require('invert-obj');

function SettlDate (settlDate) {
  this.message = settlDate;
}

SettlDate.prototype.value = function () {
  return this.message;
};

SettlDate.Tag = '64';

SettlDate.Type = 'LOCALMKTDATE';

module.exports = SettlDate;