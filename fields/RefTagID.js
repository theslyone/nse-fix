var invert = require('invert-obj');

function RefTagID (refTagId) {
  this.message = refTagId;
}

RefTagID.prototype.value = function () {
  return this.message;
};

RefTagID.Tag = '371';

RefTagID.Type = 'INT';

module.exports = RefTagID;