var invert = require('invert-obj');

function PositionEffect (positionEffect) {
  this.message = positionEffect;
}

PositionEffect.prototype.value = function () {
  return this.message;
};


PositionEffect.Keys = {
  'CLOSE': 'C',
  'FIFO': 'F',
  'OPEN': 'O',
  'ROLLED': 'R',
  'CLOSE_BUT_NOTIFY_ON_OPEN': 'N',
  'DEFAULT': 'D',
};

PositionEffect.Tag = '77';

PositionEffect.Type = 'CHAR';

PositionEffect.Values = invert(PositionEffect.Keys);

module.exports = PositionEffect;