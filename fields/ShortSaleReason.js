var invert = require('invert-obj');

function ShortSaleReason (shortSaleReason) {
  this.message = shortSaleReason;
}

ShortSaleReason.prototype.value = function () {
  return this.message;
};


ShortSaleReason.Keys = {
  'DEALER_SOLD_SHORT': '0',
  'DEALER_SOLD_SHORT_EXEMPT': '1',
  'SELLING_CUSTOMER_SOLD_SHORT': '2',
  'SELLING_CUSTOMER_SOLD_SHORT_EXEMPT': '3',
  'QUALIFIED_SERVICE_REPRESENTATIVE': '4',
  'QSR_OR_AGU_CONTRA_SIDE_SOLD_SHORT_EXEMPT': '5',
};

ShortSaleReason.Tag = '853';

ShortSaleReason.Type = 'INT';

ShortSaleReason.Values = invert(ShortSaleReason.Keys);

module.exports = ShortSaleReason;