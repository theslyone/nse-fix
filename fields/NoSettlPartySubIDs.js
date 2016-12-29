var invert = require('invert-obj');

function NoSettlPartySubIDs (noSettlPartySubIds) {
  this.message = noSettlPartySubIds;
}

NoSettlPartySubIDs.prototype.value = function () {
  return this.message;
};

NoSettlPartySubIDs.Tag = '801';

NoSettlPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoSettlPartySubIDs;