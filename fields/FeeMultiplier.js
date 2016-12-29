var invert = require('invert-obj');

function FeeMultiplier (feeMultiplier) {
  this.message = feeMultiplier;
}

FeeMultiplier.prototype.value = function () {
  return this.message;
};

FeeMultiplier.Tag = '1329';

FeeMultiplier.Type = 'FLOAT';

module.exports = FeeMultiplier;