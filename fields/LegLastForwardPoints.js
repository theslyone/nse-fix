var invert = require('invert-obj');

function LegLastForwardPoints (legLastForwardPoints) {
  this.message = legLastForwardPoints;
}

LegLastForwardPoints.prototype.value = function () {
  return this.message;
};

LegLastForwardPoints.Tag = '1073';

LegLastForwardPoints.Type = 'PRICEOFFSET';

module.exports = LegLastForwardPoints;