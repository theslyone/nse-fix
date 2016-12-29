var invert = require('invert-obj');

function SellerDays (sellerDays) {
  this.message = sellerDays;
}

SellerDays.prototype.value = function () {
  return this.message;
};

SellerDays.Tag = '287';

SellerDays.Type = 'INT';

module.exports = SellerDays;