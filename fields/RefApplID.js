var invert = require('invert-obj');

function RefApplID (refApplId) {
  this.message = refApplId;
}

RefApplID.prototype.value = function () {
  return this.message;
};

RefApplID.Tag = '1355';

RefApplID.Type = 'STRING';

module.exports = RefApplID;