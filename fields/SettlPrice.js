var invert = require('invert-obj');

function SettlPrice (settlPrice) {
  this.message = settlPrice;
}

SettlPrice.prototype.value = function () {
  return this.message;
};

SettlPrice.Tag = '730';

SettlPrice.Type = 'PRICE';

module.exports = SettlPrice;