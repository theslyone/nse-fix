var invert = require('invert-obj');

function MDBookType (mdbookType) {
  this.message = mdbookType;
}

MDBookType.prototype.value = function () {
  return this.message;
};


MDBookType.Keys = {
  'TOP_OF_BOOK': '1',
  'PRICE_DEPTH': '2',
  'ORDER_DEPTH': '3',
};

MDBookType.Tag = '1021';

MDBookType.Type = 'INT';

MDBookType.Values = invert(MDBookType.Keys);

module.exports = MDBookType;