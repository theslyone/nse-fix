var invert = require('invert-obj');

function NoNested3PartySubIDs (noNested3PartySubIds) {
  this.message = noNested3PartySubIds;
}

NoNested3PartySubIDs.prototype.value = function () {
  return this.message;
};

NoNested3PartySubIDs.Tag = '952';

NoNested3PartySubIDs.Type = 'NUMINGROUP';

module.exports = NoNested3PartySubIDs;