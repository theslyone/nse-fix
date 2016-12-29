var invert = require('invert-obj');

function Product (product) {
  this.message = product;
}

Product.prototype.value = function () {
  return this.message;
};


Product.Keys = {
  'AGENCY': '1',
  'MORTGAGE': '10',
  'MUNICIPAL': '11',
  'OTHER': '12',
  'FINANCING': '13',
  'COMMODITY': '2',
  'CORPORATE': '3',
  'CURRENCY': '4',
  'EQUITY': '5',
  'GOVERNMENT': '6',
  'INDEX': '7',
  'LOAN': '8',
  'MONEYMARKET': '9',
};

Product.Tag = '460';

Product.Type = 'INT';

Product.Values = invert(Product.Keys);

module.exports = Product;