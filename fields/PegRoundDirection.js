var invert = require('invert-obj');

function PegRoundDirection (pegRoundDirection) {
  this.message = pegRoundDirection;
}

PegRoundDirection.prototype.value = function () {
  return this.message;
};


PegRoundDirection.Keys = {
  'MORE_AGGRESSIVE': '1',
  'MORE_PASSIVE': '2',
};

PegRoundDirection.Tag = '838';

PegRoundDirection.Type = 'INT';

PegRoundDirection.Values = invert(PegRoundDirection.Keys);

module.exports = PegRoundDirection;