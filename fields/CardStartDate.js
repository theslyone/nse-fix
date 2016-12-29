var invert = require('invert-obj');

function CardStartDate (cardStartDate) {
  this.message = cardStartDate;
}

CardStartDate.prototype.value = function () {
  return this.message;
};

CardStartDate.Tag = '503';

CardStartDate.Type = 'LOCALMKTDATE';

module.exports = CardStartDate;