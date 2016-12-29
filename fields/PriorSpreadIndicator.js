var invert = require('invert-obj');

function PriorSpreadIndicator (priorSpreadIndicator) {
  this.message = priorSpreadIndicator;
}

PriorSpreadIndicator.prototype.value = function () {
  return this.message;
};

PriorSpreadIndicator.Tag = '720';

PriorSpreadIndicator.Type = 'BOOLEAN';

module.exports = PriorSpreadIndicator;