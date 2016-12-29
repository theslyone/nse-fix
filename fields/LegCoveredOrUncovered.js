var invert = require('invert-obj');

function LegCoveredOrUncovered (legCoveredOrUncovered) {
  this.message = legCoveredOrUncovered;
}

LegCoveredOrUncovered.prototype.value = function () {
  return this.message;
};

LegCoveredOrUncovered.Tag = '565';

LegCoveredOrUncovered.Type = 'INT';

module.exports = LegCoveredOrUncovered;