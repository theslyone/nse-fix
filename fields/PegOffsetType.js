var invert = require('invert-obj');

function PegOffsetType (pegOffsetType) {
  this.message = pegOffsetType;
}

PegOffsetType.prototype.value = function () {
  return this.message;
};


PegOffsetType.Keys = {
  'PRICE': '0',
  'BASIS_POINTS': '1',
  'TICKS': '2',
  'PRICE_TIER': '3',
};

PegOffsetType.Tag = '836';

PegOffsetType.Type = 'INT';

PegOffsetType.Values = invert(PegOffsetType.Keys);

module.exports = PegOffsetType;