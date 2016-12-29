var invert = require('invert-obj');

function DefOfferSize (defOfferSize) {
  this.message = defOfferSize;
}

DefOfferSize.prototype.value = function () {
  return this.message;
};

DefOfferSize.Tag = '294';

DefOfferSize.Type = 'QTY';

module.exports = DefOfferSize;