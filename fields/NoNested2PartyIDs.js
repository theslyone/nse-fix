var invert = require('invert-obj');

function NoNested2PartyIDs (noNested2PartyIds) {
  this.message = noNested2PartyIds;
}

NoNested2PartyIDs.prototype.value = function () {
  return this.message;
};

NoNested2PartyIDs.Tag = '756';

NoNested2PartyIDs.Type = 'NUMINGROUP';

module.exports = NoNested2PartyIDs;