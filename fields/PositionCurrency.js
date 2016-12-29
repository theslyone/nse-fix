var invert = require('invert-obj');

function PositionCurrency (positionCurrency) {
  this.message = positionCurrency;
}

PositionCurrency.prototype.value = function () {
  return this.message;
};

PositionCurrency.Tag = '1055';

PositionCurrency.Type = 'STRING';

module.exports = PositionCurrency;