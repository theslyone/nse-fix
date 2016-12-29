var invert = require('invert-obj');

function EffectiveTime (effectiveTime) {
  this.message = effectiveTime;
}

EffectiveTime.prototype.value = function () {
  return this.message;
};

EffectiveTime.Tag = '168';

EffectiveTime.Type = 'UTCTIMESTAMP';

module.exports = EffectiveTime;