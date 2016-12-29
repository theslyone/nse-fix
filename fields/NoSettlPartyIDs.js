var invert = require('invert-obj');

function NoSettlPartyIDs (noSettlPartyIds) {
  this.message = noSettlPartyIds;
}

NoSettlPartyIDs.prototype.value = function () {
  return this.message;
};

NoSettlPartyIDs.Tag = '781';

NoSettlPartyIDs.Type = 'NUMINGROUP';

module.exports = NoSettlPartyIDs;