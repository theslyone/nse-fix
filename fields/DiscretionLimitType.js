var invert = require('invert-obj');

function DiscretionLimitType (discretionLimitType) {
  this.message = discretionLimitType;
}

DiscretionLimitType.prototype.value = function () {
  return this.message;
};


DiscretionLimitType.Keys = {
  'OR_BETTER': '0',
  'STRICT': '1',
  'OR_WORSE': '2',
};

DiscretionLimitType.Tag = '843';

DiscretionLimitType.Type = 'INT';

DiscretionLimitType.Values = invert(DiscretionLimitType.Keys);

module.exports = DiscretionLimitType;