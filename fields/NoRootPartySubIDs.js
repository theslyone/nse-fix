var invert = require('invert-obj');

function NoRootPartySubIDs (noRootPartySubIds) {
  this.message = noRootPartySubIds;
}

NoRootPartySubIDs.prototype.value = function () {
  return this.message;
};

NoRootPartySubIDs.Tag = '1120';

NoRootPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoRootPartySubIDs;