var invert = require('invert-obj');

function NoNested4PartyIDs (noNested4PartyIds) {
  this.message = noNested4PartyIds;
}

NoNested4PartyIDs.prototype.value = function () {
  return this.message;
};

NoNested4PartyIDs.Tag = '1414';

NoNested4PartyIDs.Type = 'NUMINGROUP';

module.exports = NoNested4PartyIDs;