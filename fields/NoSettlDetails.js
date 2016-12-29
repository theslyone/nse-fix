var invert = require('invert-obj');

function NoSettlDetails (noSettlDetails) {
  this.message = noSettlDetails;
}

NoSettlDetails.prototype.value = function () {
  return this.message;
};

NoSettlDetails.Tag = '1158';

NoSettlDetails.Type = 'NUMINGROUP';

module.exports = NoSettlDetails;