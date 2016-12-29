var invert = require('invert-obj');

function Price2 (price2) {
  this.message = price2;
}

Price2.prototype.value = function () {
  return this.message;
};

Price2.Tag = '640';

Price2.Type = 'PRICE';

module.exports = Price2;