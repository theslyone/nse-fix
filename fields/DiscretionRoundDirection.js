var invert = require('invert-obj');

function DiscretionRoundDirection (discretionRoundDirection) {
  this.message = discretionRoundDirection;
}

DiscretionRoundDirection.prototype.value = function () {
  return this.message;
};


DiscretionRoundDirection.Keys = {
  'MORE_AGGRESSIVE': '1',
  'MORE_PASSIVE': '2',
};

DiscretionRoundDirection.Tag = '844';

DiscretionRoundDirection.Type = 'INT';

DiscretionRoundDirection.Values = invert(DiscretionRoundDirection.Keys);

module.exports = DiscretionRoundDirection;