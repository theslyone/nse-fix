var invert = require('invert-obj');

function RefSubID (refSubId) {
  this.message = refSubId;
}

RefSubID.prototype.value = function () {
  return this.message;
};

RefSubID.Tag = '931';

RefSubID.Type = 'STRING';

module.exports = RefSubID;