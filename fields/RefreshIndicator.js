var invert = require('invert-obj');

function RefreshIndicator (refreshIndicator) {
  this.message = refreshIndicator;
}

RefreshIndicator.prototype.value = function () {
  return this.message;
};

RefreshIndicator.Tag = '1187';

RefreshIndicator.Type = 'BOOLEAN';

module.exports = RefreshIndicator;