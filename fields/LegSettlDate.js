var invert = require('invert-obj');

function LegSettlDate (legSettlDate) {
  this.message = legSettlDate;
}

LegSettlDate.prototype.value = function () {
  return this.message;
};

LegSettlDate.Tag = '588';

LegSettlDate.Type = 'LOCALMKTDATE';

module.exports = LegSettlDate;