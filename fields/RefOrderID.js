var invert = require('invert-obj');

function RefOrderID (refOrderId) {
  this.message = refOrderId;
}

RefOrderID.prototype.value = function () {
  return this.message;
};

RefOrderID.Tag = '1080';

RefOrderID.Type = 'STRING';

module.exports = RefOrderID;