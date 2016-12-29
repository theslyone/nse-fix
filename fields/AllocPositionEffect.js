var invert = require('invert-obj');

function AllocPositionEffect (allocPositionEffect) {
  this.message = allocPositionEffect;
}

AllocPositionEffect.prototype.value = function () {
  return this.message;
};


AllocPositionEffect.Keys = {
  'OPEN': 'O',
  'CLOSE': 'C',
  'ROLLED': 'R',
  'FIFO': 'F',
};

AllocPositionEffect.Tag = '1047';

AllocPositionEffect.Type = 'CHAR';

AllocPositionEffect.Values = invert(AllocPositionEffect.Keys);

module.exports = AllocPositionEffect;