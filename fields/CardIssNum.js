var invert = require('invert-obj');

function CardIssNum (cardIssNum) {
  this.message = cardIssNum;
}

CardIssNum.prototype.value = function () {
  return this.message;
};

CardIssNum.Tag = '491';

CardIssNum.Type = 'STRING';

module.exports = CardIssNum;