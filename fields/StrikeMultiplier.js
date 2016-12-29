var invert = require('invert-obj');

function StrikeMultiplier (strikeMultiplier) {
  this.message = strikeMultiplier;
}

StrikeMultiplier.prototype.value = function () {
  return this.message;
};

StrikeMultiplier.Tag = '967';

StrikeMultiplier.Type = 'FLOAT';

module.exports = StrikeMultiplier;