var invert = require('invert-obj');

function RefApplExtID (refApplExtId) {
  this.message = refApplExtId;
}

RefApplExtID.prototype.value = function () {
  return this.message;
};

RefApplExtID.Tag = '1406';

RefApplExtID.Type = 'INT';

module.exports = RefApplExtID;