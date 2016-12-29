var invert = require('invert-obj');

function UnderlyingSettlementDate (underlyingSettlementDate) {
  this.message = underlyingSettlementDate;
}

UnderlyingSettlementDate.prototype.value = function () {
  return this.message;
};

UnderlyingSettlementDate.Tag = '987';

UnderlyingSettlementDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingSettlementDate;