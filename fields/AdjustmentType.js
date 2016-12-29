var invert = require('invert-obj');

function AdjustmentType (adjustmentType) {
  this.message = adjustmentType;
}

AdjustmentType.prototype.value = function () {
  return this.message;
};


AdjustmentType.Keys = {
  'PROCESS_REQUEST_AS_MARGIN_DISPOSITION': '0',
  'DELTA_PLUS': '1',
  'DELTA_MINUS': '2',
  'FINAL': '3',
};

AdjustmentType.Tag = '718';

AdjustmentType.Type = 'INT';

AdjustmentType.Values = invert(AdjustmentType.Keys);

module.exports = AdjustmentType;