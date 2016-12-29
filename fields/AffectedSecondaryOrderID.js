var invert = require('invert-obj');

function AffectedSecondaryOrderID (affectedSecondaryOrderId) {
  this.message = affectedSecondaryOrderId;
}

AffectedSecondaryOrderID.prototype.value = function () {
  return this.message;
};

AffectedSecondaryOrderID.Tag = '536';

AffectedSecondaryOrderID.Type = 'STRING';

module.exports = AffectedSecondaryOrderID;