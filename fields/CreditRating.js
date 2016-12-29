var invert = require('invert-obj');

function CreditRating (creditRating) {
  this.message = creditRating;
}

CreditRating.prototype.value = function () {
  return this.message;
};

CreditRating.Tag = '255';

CreditRating.Type = 'STRING';

module.exports = CreditRating;