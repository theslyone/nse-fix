var invert = require('invert-obj');

function LegRepurchaseRate (legRepurchaseRate) {
  this.message = legRepurchaseRate;
}

LegRepurchaseRate.prototype.value = function () {
  return this.message;
};

LegRepurchaseRate.Tag = '252';

LegRepurchaseRate.Type = 'PERCENTAGE';

module.exports = LegRepurchaseRate;