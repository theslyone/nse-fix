var invert = require('invert-obj');

function NoNested2PartySubIDs (noNested2PartySubIds) {
  this.message = noNested2PartySubIds;
}

NoNested2PartySubIDs.prototype.value = function () {
  return this.message;
};

NoNested2PartySubIDs.Tag = '806';

NoNested2PartySubIDs.Type = 'NUMINGROUP';

module.exports = NoNested2PartySubIDs;