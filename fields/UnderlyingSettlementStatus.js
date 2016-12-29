var invert = require('invert-obj');

function UnderlyingSettlementStatus (underlyingSettlementStatus) {
  this.message = underlyingSettlementStatus;
}

UnderlyingSettlementStatus.prototype.value = function () {
  return this.message;
};

UnderlyingSettlementStatus.Tag = '988';

UnderlyingSettlementStatus.Type = 'STRING';

module.exports = UnderlyingSettlementStatus;