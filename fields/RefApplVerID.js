var invert = require('invert-obj');

function RefApplVerID (refApplVerId) {
  this.message = refApplVerId;
}

RefApplVerID.prototype.value = function () {
  return this.message;
};

RefApplVerID.Tag = '1130';

RefApplVerID.Type = 'STRING';

module.exports = RefApplVerID;