var invert = require('invert-obj');

function LegSwapType (legSwapType) {
  this.message = legSwapType;
}

LegSwapType.prototype.value = function () {
  return this.message;
};


LegSwapType.Keys = {
  'PAR_FOR_PAR': '1',
  'MODIFIED_DURATION': '2',
  'RISK': '4',
  'PROCEEDS': '5',
};

LegSwapType.Tag = '690';

LegSwapType.Type = 'INT';

LegSwapType.Values = invert(LegSwapType.Keys);

module.exports = LegSwapType;