var invert = require('invert-obj');

function PegLimitType (pegLimitType) {
  this.message = pegLimitType;
}

PegLimitType.prototype.value = function () {
  return this.message;
};


PegLimitType.Keys = {
  'OR_BETTER': '0',
  'STRICT': '1',
  'OR_WORSE': '2',
};

PegLimitType.Tag = '837';

PegLimitType.Type = 'INT';

PegLimitType.Values = invert(PegLimitType.Keys);

module.exports = PegLimitType;