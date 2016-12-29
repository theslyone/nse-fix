var invert = require('invert-obj');

function DiscretionOffsetType (discretionOffsetType) {
  this.message = discretionOffsetType;
}

DiscretionOffsetType.prototype.value = function () {
  return this.message;
};


DiscretionOffsetType.Keys = {
  'PRICE': '0',
  'BASIS_POINTS': '1',
  'TICKS': '2',
  'PRICE_TIER': '3',
};

DiscretionOffsetType.Tag = '842';

DiscretionOffsetType.Type = 'INT';

DiscretionOffsetType.Values = invert(DiscretionOffsetType.Keys);

module.exports = DiscretionOffsetType;