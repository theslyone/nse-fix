var invert = require('invert-obj');

function RefAllocID (refAllocId) {
  this.message = refAllocId;
}

RefAllocID.prototype.value = function () {
  return this.message;
};

RefAllocID.Tag = '72';

RefAllocID.Type = 'STRING';

module.exports = RefAllocID;