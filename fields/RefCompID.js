var invert = require('invert-obj');

function RefCompID (refCompId) {
  this.message = refCompId;
}

RefCompID.prototype.value = function () {
  return this.message;
};

RefCompID.Tag = '930';

RefCompID.Type = 'STRING';

module.exports = RefCompID;