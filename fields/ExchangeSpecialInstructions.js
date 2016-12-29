var invert = require('invert-obj');

function ExchangeSpecialInstructions (exchangeSpecialInstructions) {
  this.message = exchangeSpecialInstructions;
}

ExchangeSpecialInstructions.prototype.value = function () {
  return this.message;
};

ExchangeSpecialInstructions.Tag = '1139';

ExchangeSpecialInstructions.Type = 'STRING';

module.exports = ExchangeSpecialInstructions;