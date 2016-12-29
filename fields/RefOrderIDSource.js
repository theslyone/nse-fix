var invert = require('invert-obj');

function RefOrderIDSource (refOrderIdsource) {
  this.message = refOrderIdsource;
}

RefOrderIDSource.prototype.value = function () {
  return this.message;
};


RefOrderIDSource.Keys = {
  'SECONDARYORDERID': '0',
  'ORDERID': '1',
  'MDENTRYID': '2',
  'QUOTEENTRYID': '3',
};

RefOrderIDSource.Tag = '1081';

RefOrderIDSource.Type = 'CHAR';

RefOrderIDSource.Values = invert(RefOrderIDSource.Keys);

module.exports = RefOrderIDSource;