var invert = require('invert-obj');

function DiscretionMoveType (discretionMoveType) {
  this.message = discretionMoveType;
}

DiscretionMoveType.prototype.value = function () {
  return this.message;
};


DiscretionMoveType.Keys = {
  'FLOATING': '0',
  'FIXED': '1',
};

DiscretionMoveType.Tag = '841';

DiscretionMoveType.Type = 'INT';

DiscretionMoveType.Values = invert(DiscretionMoveType.Keys);

module.exports = DiscretionMoveType;