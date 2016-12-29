var invert = require('invert-obj');

function SecondaryOrderID (secondaryOrderId) {
  this.message = secondaryOrderId;
}

SecondaryOrderID.prototype.value = function () {
  return this.message;
};

SecondaryOrderID.Tag = '198';

SecondaryOrderID.Type = 'STRING';

module.exports = SecondaryOrderID;