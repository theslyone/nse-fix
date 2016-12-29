var invert = require('invert-obj');

function LegCreditRating (legCreditRating) {
  this.message = legCreditRating;
}

LegCreditRating.prototype.value = function () {
  return this.message;
};

LegCreditRating.Tag = '257';

LegCreditRating.Type = 'STRING';

module.exports = LegCreditRating;