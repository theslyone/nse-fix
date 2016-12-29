var invert = require('invert-obj');

function LastSpotRate (lastSpotRate) {
  this.message = lastSpotRate;
}

LastSpotRate.prototype.value = function () {
  return this.message;
};

LastSpotRate.Tag = '194';

LastSpotRate.Type = 'PRICE';

module.exports = LastSpotRate;