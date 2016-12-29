var invert = require('invert-obj');

function UnderlyingCreditRating (underlyingCreditRating) {
  this.message = underlyingCreditRating;
}

UnderlyingCreditRating.prototype.value = function () {
  return this.message;
};

UnderlyingCreditRating.Tag = '256';

UnderlyingCreditRating.Type = 'STRING';

module.exports = UnderlyingCreditRating;