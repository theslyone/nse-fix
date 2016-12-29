var invert = require('invert-obj');

function UnderlyingRepurchaseRate (underlyingRepurchaseRate) {
  this.message = underlyingRepurchaseRate;
}

UnderlyingRepurchaseRate.prototype.value = function () {
  return this.message;
};

UnderlyingRepurchaseRate.Tag = '245';

UnderlyingRepurchaseRate.Type = 'PERCENTAGE';

module.exports = UnderlyingRepurchaseRate;