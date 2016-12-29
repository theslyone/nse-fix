var invert = require('invert-obj');

function SettlementCycleNo (settlementCycleNo) {
  this.message = settlementCycleNo;
}

SettlementCycleNo.prototype.value = function () {
  return this.message;
};

SettlementCycleNo.Tag = '1153';

SettlementCycleNo.Type = 'INT';

module.exports = SettlementCycleNo;