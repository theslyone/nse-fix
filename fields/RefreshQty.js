var invert = require('invert-obj');

function RefreshQty (refreshQty) {
  this.message = refreshQty;
}

RefreshQty.prototype.value = function () {
  return this.message;
};

RefreshQty.Tag = '1088';

RefreshQty.Type = 'QTY';

module.exports = RefreshQty;