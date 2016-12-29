var invert = require('invert-obj');

function LegPositionEffect (legPositionEffect) {
  this.message = legPositionEffect;
}

LegPositionEffect.prototype.value = function () {
  return this.message;
};

LegPositionEffect.Tag = '564';

LegPositionEffect.Type = 'CHAR';

module.exports = LegPositionEffect;