var invert = require('invert-obj');

function NoNested4PartySubIDs (noNested4PartySubIds) {
  this.message = noNested4PartySubIds;
}

NoNested4PartySubIDs.prototype.value = function () {
  return this.message;
};

NoNested4PartySubIDs.Tag = '1413';

NoNested4PartySubIDs.Type = 'NUMINGROUP';

module.exports = NoNested4PartySubIDs;