var invert = require('invert-obj');

function AffectedOrderID (affectedOrderId) {
  this.message = affectedOrderId;
}

AffectedOrderID.prototype.value = function () {
  return this.message;
};

AffectedOrderID.Tag = '535';

AffectedOrderID.Type = 'STRING';

module.exports = AffectedOrderID;