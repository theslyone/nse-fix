var invert = require('invert-obj');

function CardHolderName (cardHolderName) {
  this.message = cardHolderName;
}

CardHolderName.prototype.value = function () {
  return this.message;
};

CardHolderName.Tag = '488';

CardHolderName.Type = 'STRING';

module.exports = CardHolderName;