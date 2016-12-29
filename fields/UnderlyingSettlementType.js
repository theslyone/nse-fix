var invert = require('invert-obj');

function UnderlyingSettlementType (underlyingSettlementType) {
  this.message = underlyingSettlementType;
}

UnderlyingSettlementType.prototype.value = function () {
  return this.message;
};


UnderlyingSettlementType.Keys = {
  'T_PLUS_1': '2',
  'T_PLUS_3': '4',
  'T_PLUS_4': '5',
};

UnderlyingSettlementType.Tag = '975';

UnderlyingSettlementType.Type = 'INT';

UnderlyingSettlementType.Values = invert(UnderlyingSettlementType.Keys);

module.exports = UnderlyingSettlementType;