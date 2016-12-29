var invert = require('invert-obj');

function CardNumber (cardNumber) {
  this.message = cardNumber;
}

CardNumber.prototype.value = function () {
  return this.message;
};

CardNumber.Tag = '489';

CardNumber.Type = 'STRING';

module.exports = CardNumber;