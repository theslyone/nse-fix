var invert = require('invert-obj');

function CardExpDate (cardExpDate) {
  this.message = cardExpDate;
}

CardExpDate.prototype.value = function () {
  return this.message;
};

CardExpDate.Tag = '490';

CardExpDate.Type = 'LOCALMKTDATE';

module.exports = CardExpDate;