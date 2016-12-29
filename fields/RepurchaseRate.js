var invert = require('invert-obj');

function RepurchaseRate (repurchaseRate) {
  this.message = repurchaseRate;
}

RepurchaseRate.prototype.value = function () {
  return this.message;
};

RepurchaseRate.Tag = '227';

RepurchaseRate.Type = 'PERCENTAGE';

module.exports = RepurchaseRate;