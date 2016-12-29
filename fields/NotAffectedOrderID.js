var invert = require('invert-obj');

function NotAffectedOrderID (notAffectedOrderId) {
  this.message = notAffectedOrderId;
}

NotAffectedOrderID.prototype.value = function () {
  return this.message;
};

NotAffectedOrderID.Tag = '1371';

NotAffectedOrderID.Type = 'STRING';

module.exports = NotAffectedOrderID;