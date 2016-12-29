var invert = require('invert-obj');

function RefCstmApplVerID (refCstmApplVerId) {
  this.message = refCstmApplVerId;
}

RefCstmApplVerID.prototype.value = function () {
  return this.message;
};

RefCstmApplVerID.Tag = '1131';

RefCstmApplVerID.Type = 'STRING';

module.exports = RefCstmApplVerID;